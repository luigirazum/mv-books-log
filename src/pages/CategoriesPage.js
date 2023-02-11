import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './CategoriesPage.css';

const CategoriesPage = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="title">Avaliable Book&apos;s Categories</h2>
      <button
        type="button"
        className="checkStatusButton"
        onClick={() => dispatch(checkStatus())}
      >
        Check Status
      </button>
      <p className="underConstruction">{status}</p>
    </div>
  );
};

export default CategoriesPage;
