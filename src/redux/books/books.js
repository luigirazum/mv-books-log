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
          ...action.payload,
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

export { addBook, removeBook };
export default reducer;
