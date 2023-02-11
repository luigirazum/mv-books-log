import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';
import bookDataGen from './bookDataGen';
import './Book.css';

const Book = (props) => {
  const {
    bookInfo: book,
    bookInfo: { title, author },
  } = props;

  const fakeProgress = bookDataGen(23);
  const {
    category, chapterName, percent,
  } = fakeProgress;

  const bpRingStyle = {
    backgroundImage: `conic-gradient(var(--medium-blue) ${percent}%, var(--progress-color) 0)`,
  };

  const dispatch = useDispatch();

  return (
    <>
      <section className="bookInfo">
        <h3 className="biCategory">{category}</h3>
        <h2 className="biTitle">{title}</h2>
        <h4 className="biAuthor">{author}</h4>
        <ul className="biActions">
          <li className="biActionItem">
            <button type="button" className="biActionButton">
              Comments
            </button>
          </li>
          <li className="biActionItem">
            <button
              type="button"
              onClick={() => dispatch(removeBook(book))}
              className="biActionButton"
            >
              Remove
            </button>
          </li>
          <li className="biActionItem">
            <button type="button" className="biActionButton">
              Edit
            </button>
          </li>
        </ul>
      </section>
      <section className="bookProgress">
        <div className="bpIconContainer">
          <div
            className="bpIcon"
            style={bpRingStyle}
          >
            <div className="bpIconInner" />
          </div>
        </div>
        <div className="bpData">
          <h5 className="bpPercentage">
            {`${percent}%`}
          </h5>
          <p className="bpCompleted">Completed</p>
        </div>
      </section>
      <section className="bookChapter">
        <h6 className="bchCurrent">Current Chapter</h6>
        <p className="bchName">{chapterName}</p>
        <button type="button" className="bchUpdateButton">
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
