import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Menu.css'; 

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-content">
        <h1 className="menu-title">Meniu</h1>
        <div className="menu-buttons">
          <Link to="/level">
            <button className="menu-button">Către tematici</button>
          </Link>
          <Link to="/favorites">
            <button className="menu-button">Favorite</button>
          </Link>
          <Link to="/credits">
            <button className="menu-button">Credits</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
