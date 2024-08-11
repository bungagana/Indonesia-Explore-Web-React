import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/sejarah" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Sejarah
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/quiz" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Quiz
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/game" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Game
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/guide" 
              className={({ isActive }) => (isActive ? 'active-link' : '')}
            >
              Guide
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
