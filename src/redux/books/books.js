/**
 * action types for BOOKS
 */
const ADD_BOOK = 'bookslog/books/ADD_BOOK';
const REMOVE_BOOK = 'bookslog/books/REMOVE_BOOK';

/**
 * reducer for BOOKS
 */
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: state.length + 1,
          ...action.book,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(
        (book) => book.id !== action.id,
      );
    default:
      return state;
  }
};

/**
 * action creators for BOOKS
 */
const addBook = () => ({ type: ADD_BOOK });

const removeBook = () => ({ type: REMOVE_BOOK });

export { addBook, removeBook };
export default reducer;
