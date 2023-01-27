import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import Button from './Button';

const BooksList = (props) => {
  const { books } = props;

  const bookList = books.map((book) => {
    const { id } = book;

    return (
      <li key={id}>
        <Book bookInfo={book} />
        <Button text="Remove" />
      </li>
    );
  });

  return (
    <ul>
      {bookList}
    </ul>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};

BooksList.defaultProps = {
  books: [
    { id: 1, title: 'Book One', author: 'First Author' },
    { id: 2, title: 'Book Two', author: 'Second Author' },
    { id: 3, title: 'Book Three', author: 'Third Author' },
    { id: 4, title: 'Book Four', author: 'Fourth Author' },
    { id: 5, title: 'Book Five', author: 'Fifth Author' },
  ],
};

export default BooksList;
