import React from 'react';
import LevelBox from './LevelBox';
import { Link } from 'react-router-dom';
import './styles/Main.css'

const Level = () => {
  const images = [
    { src: '/poza1.jpg', alt: 'Alt text 1' },
    { src: '/poza2.jpg', alt: 'Alt text 2' },
    { src: '/poza3.jpg', alt: 'Alt text 3' },
    { src: '/poza4.jpg', alt: 'Alt text 4' },
  ];

  return (
    <div
      className="level-container"
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      <div
        className="background-image"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url('./poza3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
        }}
      ></div>
      <h1 style={{ marginTop: '50px', zIndex: 1, textAlign: 'center' }}>Dincolo de disonanțe și inteferențe, alege să asimilezi unul din următoarele stiluri prezente în Bucuresți, oraș supranumit și:</h1>
      <div
        style={{
          maxHeight: '70vh', 
          overflowY: 'auto', 
          width: '100%',
        }}
      >
       <Link to="/main/neoromanesc" className="level-box-link">
        <LevelBox images={images} tagText="nivel n" />
        </Link>
      <Link to="/main/artdeco" className="level-box-link">
        <LevelBox images={images} tagText="nivel n" />
        </Link>
  
      </div>
      <div className="link-button" style={{ position: 'fixed', top: '10px', left: '10px' }}>
        <button
          onClick={() => { window.location.href = '/menu'; }}
          style={{
            padding: '6px 8px', 
            borderRadius: '8px', 
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            border: '1px solid rgba(0, 0, 0, 0.6)',
            fontSize: '12px', 
            cursor: 'pointer',
            outline: 'none',
          }}
        >
          Înapoi la meniu
        </button>
</div>
    </div>
  );
};

export default Level;

