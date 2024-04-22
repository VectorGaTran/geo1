import React, { useState, useEffect } from 'react';

const LevelBox = ({ images, tagText }) => {
  const [hovered, setHovered] = useState(false);
  const [shiftedImages, setShiftedImages] = useState([...images]);

  useEffect(() => {
    let interval;
    if (hovered) {
      interval = setInterval(() => {
        const shifted = shiftedImages.slice(1).concat(shiftedImages.slice(0, 1));
        setShiftedImages(shifted);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [hovered, shiftedImages]); 

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleImageError = (index) => {
    console.error(`Error loading image at index ${index}`);
  };

  return (
    <div
      className="box-container"
      style={{
        width: '97%',
        height: '200px',
        margin: '50px auto',
        position: 'relative',
        overflow: 'hidden', 
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div className="box" style={{ position: 'relative' }}>
        {shiftedImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onError={() => handleImageError(index)}
            style={{ width: 'auto', maxHeight: '200px', objectFit: 'contain' }}
          />
        ))}
      </div>
      <div
        className="tag"
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '95%',
          textAlign: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          visibility: hovered ? 'visible' : 'hidden',
        }}
      >
       {tagText}
      </div>
    </div>
  );
};

export default LevelBox;
