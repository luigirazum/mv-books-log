import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = (props) => {
  const {
    bookInfo: book,
    bookInfo: { title, author },
  } = props;

  const dispatch = useDispatch();

  return (
    <>
      <section className="bookInfo">
        <h3 className="biCategory">category</h3>
        <h2 className="biTitle">{title}</h2>
        <h4 className="biAuthor">{author}</h4>
        <ul>
          <li>
            <button type="button" className="biActionButton">
              Comments
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => dispatch(removeBook(book))}
              className="biActionButton"
            >
              Remove
            </button>
          </li>
          <li>
            <button type="button" className="biActionButton">
              Edit
            </button>
          </li>
        </ul>
      </section>
      <section className="bookProgress">
        <h5 className="biPercentage">0%</h5>
        <p className="biCompleted">Completed</p>
      </section>
      <section className="bookChapter">
        <h6 className="biCurrentChapter">Current Chapter</h6>
        <p className="biChapterName">Chapter name</p>
        <button type="button" className="biUpdateButton">
          Update Progress
        </button>
      </section>
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
