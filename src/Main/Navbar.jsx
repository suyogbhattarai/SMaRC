import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar-card">
      <div className="logo">
        <a href="./">
          <img src="./smarcLOGO.png" alt="Logo" />
        </a>
      </div>
      <div className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a>Products</a></li>
          <li><a href="/?redirect=navbarRobotics&scrollPosition=6.113384556516312">Skill Museum</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
