import { v4 as uuidv4 } from 'uuid';

/**
 * action types for BOOKS
 */
// fetch actions
const FETCH_BOOKS_BEGIN = 'FETCH_BOOKS_BEGIN';
const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
const FETCH_BOOKS_FAIL = 'FETCH_BOOKS_FAIL';

// non-fetch actions
const ADD_BOOK = 'bookslog/books/ADD_BOOK';
const REMOVE_BOOK = 'bookslog/books/REMOVE_BOOK';

/**
 * initialState for BOOKS
 */
const initialState = [];

/**
 * reducer for BOOKS
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: uuidv4(),
          ...action.payload,
          category: 'Book',
        },
      ];
    case REMOVE_BOOK:
      return [...state].filter(
        (book) => book.id !== action.payload,
      );
    default:
      return state;
  }
};

/**
 * action creators for BOOKS
 */
const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

/**
 * action creators for fetch BOOKS
*/
const fetchBooksBegin = () => ({
  type: FETCH_BOOKS_BEGIN,
});

const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: { books },
});

const fetchBooksFail = (error) => ({
  type: FETCH_BOOKS_FAIL,
  payload: { error },
});

export { addBook, removeBook };
export { fetchBooksBegin, fetchBooksSuccess, fetchBooksFail };
export default reducer;
