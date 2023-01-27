import React from 'react';

const AddBook = () => (
  <div>
    <h2>Add New Book</h2>

    <form>
      <input
        type="text"
        placeholder="Book title"
        name="title"
      />

      <input
        type="text"
        placeholder="Book author"
        name="author"
      />

      <button type="submit">
        Add Book
      </button>
    </form>
  </div>
);

export default AddBook;
