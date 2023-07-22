import React, { useState } from 'react';

const Reviews = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Review created:', data);
        // Reset the form
        setTitle('');
        setContent('');
      } else {
        console.error('Failed to create review:', response.status);
      }
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  };

  return (
    <div>
      <h1>Review Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Title'
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Content'
          required
        ></textarea>
        <button type='submit'>Submit Review</button>
      </form>
    </div>
  );
};

export default Reviews;
