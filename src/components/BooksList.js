import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => (state.books));

  const bookList = books.map((book) => {
    const { id, ...info } = book;

    return (
      <li key={id}>
        <Book bookInfo={info} />
      </li>
    );
  });

  return (
    <ul>
      {bookList}
    </ul>
  );
};

export default BooksList;
