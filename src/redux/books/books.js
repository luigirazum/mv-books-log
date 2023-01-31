/**
 * action types for BOOKS
 */
const ADD_BOOK = 'bookslog/books/ADD_BOOK';
const REMOVE_BOOK = 'bookslog/books/REMOVE_BOOK';

/**
 * initialState for BOOKS
 */
const initialState = [
  { id: 1, title: 'Book One', author: 'First Author' },
  { id: 2, title: 'Book Two', author: 'Second Author' },
  { id: 3, title: 'Book Three', author: 'Third Author' },
  { id: 4, title: 'Book Four', author: 'Fourth Author' },
  { id: 5, title: 'Book Five', author: 'Fifth Author' },
];

/**
 * reducer for BOOKS
 */
const reducer = (state = initialState, action = {}) => {
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
