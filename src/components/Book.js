import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = (props) => {
  const { book: { title, author } } = props;

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
  book: PropTypes.exact({
    title: PropTypes.string,
    author: PropTypes.string,
  }),
};

Book.defaultProps = {
  book: {
    title: 'The Book',
    author: 'Author Name',
  },
};

export default Book;
