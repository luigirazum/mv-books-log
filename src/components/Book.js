import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const {
    bookInfo: book,
    bookInfo: { title, author },
  } = props;

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>{title}</h2>
        <h4>{author}</h4>
      </div>
      <button
        type="button"
        onClick={() => dispatch(removeBook(book))}
      >
        Remove
      </button>
    </>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
