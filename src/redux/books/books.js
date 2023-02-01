import { v4 as uuidv4 } from 'uuid';

/**
 * action types for BOOKS
 */
const ADD_BOOK = 'bookslog/books/ADD_BOOK';
const REMOVE_BOOK = 'bookslog/books/REMOVE_BOOK';

/**
 * initialState for BOOKS
 */
const initialState = [
  { id: uuidv4(), title: 'React for Dummies', author: 'The Dummies' },
  { id: uuidv4(), title: 'Redux for Dummies', author: 'The Redummies' },
  { id: uuidv4(), title: 'React with Redux', author: 'The Juniors' },
  { id: uuidv4(), title: 'Reduxing with Hooks', author: 'Hookers Team' },
  { id: uuidv4(), title: 'Reduxed APIs', author: 'The Reduxers' },
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
          id: uuidv4(),
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
