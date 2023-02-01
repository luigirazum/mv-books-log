import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = (props) => {
  const { bookInfo: { title, author } } = props;

  return (
    <>
      <div>
        <h2>{title}</h2>
        <h4>{author}</h4>
      </div>
      <Button text="Remove" />
    </>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.exact({
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};

export default Book;
