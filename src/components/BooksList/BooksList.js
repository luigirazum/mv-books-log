import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../Book/Book';
import './BooksList.css';

const BooksList = () => {
  const books = useSelector((state) => (state.books.library));

  const bookList = books.map((book) => {
    const { id } = book;

    return (
      <li key={id} className="bookItem">
        <Book bookInfo={book} />
      </li>
    );
  });

  return (
    <ul className="booksList">
      {bookList}
    </ul>
  );
};

export default BooksList;
