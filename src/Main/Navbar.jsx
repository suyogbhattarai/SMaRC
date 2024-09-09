// src/Home/Navbar.js
import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <a href="./"><img src="./smarcLOGO.png" alt="Logo" /></a>
      </div>
      <div className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/?redirect=navbar&scrollPosition=3.013384556516312">AssistedVision</a></li>
          <li><a href="/?redirect=navbarRobotics&scrollPosition=6.113384556516312">Projects</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
