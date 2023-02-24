import React from 'react';
import { FaUser } from 'react-icons/fa';
import './Avatar.css';

const Avatar = () => (
  <button type="button" className="avatar">
    <span>
      <FaUser className="icon" />
    </span>
  </button>
);

export default Avatar;
