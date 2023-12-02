// src/App.js
import React from 'react';
import BookList from './components/BookList';
import booksData from './data/booksData';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Book List App</h1>
      <BookList booksData={booksData} />
    </div>
  );
};

export default App;
