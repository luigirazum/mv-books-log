import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;

  return (
    <div>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: 'The Book',
  author: 'Author Name',
};

export default Book;
