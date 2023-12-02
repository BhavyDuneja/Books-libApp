import React, { useState } from 'react';
import Book from './Book';  	  

const BookList = ({ booksData }) => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilter = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = selectedGenre
    ? booksData.filter((book) => book.genre === selectedGenre)
    : booksData;

  const filteredBooksBySearch = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by title or author"
          value={searchTerm}
          onChange={handleSearch}
        /><br/><br/>
        <button onClick={() => handleFilter('Fantasy')}>Fantasy</button>
        <button onClick={() => handleFilter('Thriller')}>Thriller</button>
        <button onClick={() => handleFilter(null)}>Reset</button>
      </div>
      <div className="book-list">
        {filteredBooksBySearch.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
