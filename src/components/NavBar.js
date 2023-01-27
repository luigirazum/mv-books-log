import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink to={path} end>
          {text}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul>
        {navLinks}
      </ul>
    </nav>
  );
};

export default NavBar;
