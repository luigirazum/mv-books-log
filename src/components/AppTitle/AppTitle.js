import React from 'react';
import { Link } from 'react-router-dom';
import './AppTitle.css';

const AppTitle = () => (
  <Link to="/" end="true" className="appTitle">BooksLog CMS</Link>
);

export default AppTitle;
