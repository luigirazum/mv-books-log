import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
  baseUrl, epBooks, epRemove, headersList,
} from '../api/apiConfig';

/**
 * action types for BOOKS
 */
const PREFIX = 'bookslog/books';
const FETCH_BOOKS = `${PREFIX}/FETCH_BOOKS`;
const FETCH_ADD_BOOK = `${PREFIX}/ADD_BOOK`;
const FETCH_REMOVE_BOOK = `${PREFIX}/REMOVE_BOOK`;

/**
 * Get the books stored in the API
 */
const fetchBooks = createAsyncThunk(
  FETCH_BOOKS,
  async () => {
    const response = await
    fetch(
      `${baseUrl}${epBooks}`,
      {
        method: 'GET',
        headers: headersList,
      },
    );
    return response.json();
  },
);

/**
 * Add a Book in the API
 */
const addBook = createAsyncThunk(
  FETCH_ADD_BOOK,
  async (book) => {
    const newBook = {
      ...book,
      item_id: uuidv4(),
      category: 'Book',
    };
    const { item_id: itemId, category: cat } = newBook;

    const addedBook = {
      ...book,
      id: itemId,
      category: cat,
    };

    const bodyContent = JSON.stringify(newBook);

    const response = await
    fetch(
      `${baseUrl}${epBooks}`,
      {
        method: 'POST',
        body: bodyContent,
        headers: headersList,
      },
    );
    return { addedBook, response };
  },
);

/**
 * Remove a Book in the API
 */
const removeBook = createAsyncThunk(
  FETCH_REMOVE_BOOK,
  async (book) => {
    const { id } = book;

    const response = await
    fetch(
      `${baseUrl}${epRemove}${id}`,
      {
        method: 'DELETE',
      },
    );
    return { removedBook: book, response };
  },
);

/**
 * initialState for BOOKS
 */
const initialState = {
  library: [],
  loading: false,
  error: null,
};

/**
 * slicer for BOOKS
 */
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchBooks.pending,
        (state) => ({
          ...state,
          loading: true,
          error: null,
        }),
      )
      .addCase(
        fetchBooks.fulfilled,
        (state, action) => {
          const { payload: response } = action;
          const entries = Object.getOwnPropertyNames(response);
          const fetchedBooks = entries.map((entry) => {
            const values = Object.getOwnPropertyNames(response[entry][0]);
            const bookInfo = {};
            values.forEach((value) => {
              bookInfo[value] = response[entry][0][value];
            });
            bookInfo.id = entry;
            return bookInfo;
          });
          return {
            ...state,
            library: [...fetchedBooks],
            loading: false,
          };
        },
      )
      .addCase(
        fetchBooks.rejected,
        (state, action) => {
          const { message } = action.error;
          return {
            ...state,
            loading: false,
            error: message,
          };
        },
      )
      .addCase(
        addBook.pending,
        (state) => ({
          ...state,
          adding: true,
          error: null,
        }),
      )
      .addCase(
        addBook.fulfilled,
        (state, action) => {
          const { addedBook: book } = action.payload;
          return {
            ...state,
            library: state.library.concat(book),
            adding: false,
          };
        },
      )
      .addCase(
        addBook.rejected,
        (state, action) => {
          const { message } = action.error;
          return {
            ...state,
            adding: false,
            error: message,
          };
        },
      )
      .addCase(
        removeBook.pending,
        (state) => ({
          ...state,
          removing: true,
          error: null,
        }),
      )
      .addCase(
        removeBook.fulfilled,
        (state, action) => {
          const { id: removedId } = action.payload.removedBook;
          return {
            ...state,
            library: state.library.filter(
              (book) => (book.id !== removedId),
            ),
            removing: false,
          };
        },
      )
      .addCase(
        removeBook.rejected,
        (state, action) => {
          const { message } = action.error;
          return {
            ...state,
            removing: false,
            error: message,
          };
        },
      )
      .addDefaultCase(
        (state) => (state),
      );
  },
});

/**
 * actions for fetchBooks
 */
export { fetchBooks, addBook, removeBook };

/**
 * extract/export reducer for BOOKS
 */
const { reducer } = bookSlice;
export default reducer;
