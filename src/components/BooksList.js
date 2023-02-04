import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BooksList = () => {
  const books = useSelector((state) => (state.books.library));

  const bookList = books.map((book) => {
    const { id } = book;

    return (
      <li key={id}>
        <Book bookInfo={book} />
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
