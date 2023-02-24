import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import './AddBook.css';

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
    <section className="addBook">
      <h2 className="subtitle">Add New Book</h2>

      <form onSubmit={submitHandler} className="newBook">
        <input
          type="text"
          placeholder="Book title"
          name="title"
          required
          className="bookInput bookTitle"
        />

        <input
          type="text"
          placeholder="Book author"
          name="author"
          required
          className="bookInput bookAuthor"
        />

        <button type="submit" className="addButton">
          Add Book
        </button>
      </form>
    </section>
  );
};

export default AddBook;
