/**
 * action types for BOOKS
 */
const ADD_BOOK = 'bookslog/books/ADD_BOOK';
const REMOVE_BOOK = 'bookslog/books/REMOVE_BOOK';

/**
 * action creators for BOOKS
 */
const addBook = () => ({ type: ADD_BOOK });

const removeBook = () => ({ type: REMOVE_BOOK });

export { addBook, removeBook };
