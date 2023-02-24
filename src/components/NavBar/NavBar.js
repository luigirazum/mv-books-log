import React from 'react';
import { NavLink } from 'react-router-dom';
import AppTitle from '../AppTitle/AppTitle';
import Avatar from '../Avatar/Avatar';
import './NavBar.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  const navLinks = links.map((link) => {
    const { id, path, text } = link;
    return (
      <li key={id}>
        <NavLink to={path} end className="navLink">
          {text}
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <AppTitle />
      <nav className="navBar">
        <ul className="navLinks">
          {navLinks}
        </ul>
      </nav>
      <Avatar />
    </>
  );
};

export default NavBar;
