import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const {
      target: form,
      target: { elements: { title: inputTitle } },
    } = e;

    const formData = new FormData(form);
    const formTitle = formData.get('title');
    const formAuthor = formData.get('author');

    const newBook = {
      title: formTitle,
      author: formAuthor,
    };

    dispatch(addBook(newBook));
    form.reset();
    inputTitle.focus();
  };

  return (
    <div>
      <h2>Add New Book</h2>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Book title"
          name="title"
          required
        />

        <input
          type="text"
          placeholder="Book author"
          name="author"
          required
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
