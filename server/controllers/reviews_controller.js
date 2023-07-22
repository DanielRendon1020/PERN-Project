const reviews = require('express').Router();
const db = require('../models');
const { Reviews } = db;

// GET All reviews
reviews.get('/reviews', async (req, res) => {
  try {
    const foundReviews = await Reviews.findAll();
    res.status(200).json(foundReviews);
  } catch (err) {
    res.status(500).send(`Server error: ${err}`);
    console.log(err);
  }
});

// POST Create a new review
reviews.post('/reviews', async (req, res) => {
  const { title, content } = req.body;

  try {
    const newReview = await Reviews.create({ title, content });
    res.status(201).json(newReview);
  } catch (err) {
    res.status(500).send(`Server error: ${err}`);
    console.log(err);
  }
});

module.exports = reviews;
