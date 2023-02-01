import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const CategoriesPage = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Book&apos;s Categories</h2>
      <button
        type="button"
        className="checkStatus"
        onClick={() => dispatch(checkStatus())}
      >
        Check Status
      </button>
      <p>{status}</p>
    </div>
  );
};

export default CategoriesPage;
