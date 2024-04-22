import React, { useState } from 'react';
import './styles/PhotoGallery.css'; 

const defaultPhotos = [
  './poza1.jpg',
  './poza2.jpg'
]; 

const PhotoGallery = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const displayPhotos = photos && photos.length > 0 ? photos : defaultPhotos;

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === displayPhotos.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex === 0 ? displayPhotos.length - 1 : prevIndex - 1));
  };

  return (
    <div className="gallery-container">
      <div className="gallery-section">
        {displayPhotos.length > 0 ? (
          <>
            <button className="prev-button" onClick={handlePrevPhoto}>&lt;</button>
            <img src={displayPhotos[currentPhotoIndex]} alt={`Photo ${currentPhotoIndex + 1}`} />
            <button className="next-button" onClick={handleNextPhoto}>&gt;</button>
          </>
        ) : (
          <p>No photos available</p>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
