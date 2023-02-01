/**
 * action types for BOOKS
 */
const ADD_BOOK = 'bookslog/books/ADD_BOOK';
const REMOVE_BOOK = 'bookslog/books/REMOVE_BOOK';

/**
 * initialState for BOOKS
 */
const initialState = [
  { id: 1, title: 'React for Dummies', author: 'The Dummies' },
  { id: 2, title: 'Redux for Dummies', author: 'The Redummies' },
  { id: 3, title: 'React with Redux', author: 'The Juniors' },
  { id: 4, title: 'Reduxing with Hooks', author: 'Hookers Team' },
  { id: 5, title: 'Reduxed APIs', author: 'The Reduxers' },
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
