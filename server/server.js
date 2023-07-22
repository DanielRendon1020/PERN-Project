// server.js
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables from a .env file if available
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));

// Supabase configuration
const supabase = createClient(
  'https://tvwekwohafzwojqwkuaw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2d2Vrd29oYWZ6d29qcXdrdWF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDg4NDAsImV4cCI6MjAwMzU4NDg0MH0.hutfQaax4HpfhD-AiORLc4027L5xIK7E64YhGFtaeNE'
);

// Routes
app.post('/api/reviews', async (req, res) => {
  const { title, content } = req.body;
  try {
    const { data, error } = await supabase
      .from('reviews')
      .insert([{ title, content }]);
    if (error) {
      throw new Error(error.message);
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

// Start the server
const port = process.env.PORT || 4005;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
