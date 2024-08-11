import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/game">Game</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/sejarah">Sejarah</Link></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
