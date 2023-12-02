// src/components/Book.js
import React from 'react';

const Book = ({ title, author, description }) => {
  return (
    <div className="book">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{description}</p>
    </div>
  );
};

export default Book;
