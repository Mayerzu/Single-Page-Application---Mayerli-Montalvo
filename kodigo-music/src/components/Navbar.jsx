import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('userData');

  return (
    <nav className="navbar">
      <h1>Kodigo Music</h1>
      <ul>
        <li><Link to="/home">Home</Link></li>
        {isLoggedIn && <li><Link to="/profile">Perfil</Link></li>}
      </ul>
    </nav>
  );
};

export default Navbar;