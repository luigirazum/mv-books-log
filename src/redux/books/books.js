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
  {
    id: uuidv4(),
    title: 'React for Dummies',
    author: 'The Dummies',
    category: 'Book',
  },
  {
    id: uuidv4(),
    title: 'Redux for Dummies',
    author: 'The Redummies',
    category: 'Book',
  },
  {
    id: uuidv4(),
    title: 'React with Redux',
    author: 'The Juniors',
    category: 'Book',
  },
  {
    id: uuidv4(),
    title: 'Reduxing with Hooks',
    author: 'Hookers Team',
    category: 'Book',
  },
  {
    id: uuidv4(),
    title: 'Reduxed APIs',
    author: 'The Reduxers',
    category: 'Book',
  },
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

export { addBook, removeBook };
export default reducer;
