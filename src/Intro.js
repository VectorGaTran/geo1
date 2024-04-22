import React from 'react';
import './styles/Intro.css';
import { Link } from 'react-router-dom';

function Intro() {
  const titleStyle = {
    fontFamily: 'Noto Serif, EB Garamond, Fraktur, "Goudy Old Style", "Segoe Print", serif',
    fontSize: '48px',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: '1.2',
    color: '#800080', 
    textShadow: '2px 2px 4px #000000',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    textAlign: 'center',
    color: '#333333',
  };

  return (
    <div className="intro-container">
      <div className="intro-content">
        <h1 style={titleStyle}>
          <span style={{ fontFamily: 'Noto Serif', color: '#800080' }}>Crononaut</span>{' '}
          <span style={{ fontFamily: 'EB Garamond', color: '#800080' }}>în</span>{' '}
          <span style={{ fontFamily: 'Fraktur', color: '#800080' }}>urbe:</span>{' '}
        </h1>
        <h1 style={titleStyle}>
          <span style={{ fontFamily: 'Goudy Old Style', color: '#800080' }}>incursiune</span>{' '}
          <span style={{ fontFamily: '"Segoe Print"', color: '#800080' }}>arhitecturală</span>{' '}
        </h1>
        <p style={paragraphStyle}>
          Cea mai longevivă și mai reală exprimare artistică a unei societăți și a unei civilizații, aceea în care forma și funcția nu se pot exclude reciproc, se regăsește în piatră, cărămidă și beton: orașul și clădirile sale.
        </p>
        <Link to="/menu">
          <button className="transparent-button">Continuă</button>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
