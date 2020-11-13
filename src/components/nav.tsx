import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
  return (
    <nav className="nav-container">
      <Link to="/"><h3>트라이캐치</h3></Link>
      <Link to="/projects"><h3>탐색</h3></Link>
      <Link to="/partners"><h3>파트너십</h3></Link>
    </nav>
  )
};

export default Nav;