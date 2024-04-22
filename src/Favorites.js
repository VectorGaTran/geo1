import React, { useState, useEffect } from 'react';
import MapSection from './MapSection';
import PhotoGallery from './PhotoGallery'; 
import StreetViewSection from './StreetViewSection';

const Favorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const [markerData, setMarkerData] = useState(null);
  const [isMarkerOpen, setIsMarkerOpen] = useState(false);

  const handleMarkerClick = (data) => {
    setMarkerData(data);
    setIsMarkerOpen(true);
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(favorite => favorite.id !== id));
    localStorage.setItem('favorites', JSON.stringify(favorites.filter(favorite => favorite.id !== id)));
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="background-image"></div>
      <div className="section">
        <div className="content scrollableContent">
          <div className="scrollable">
            {isMarkerOpen ? (
              <div>
                {markerData && <p>{markerData.text}</p>}
              </div>
            ) : (
              <div>
                <p>Aici puteți revizita locurile favorite</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <MapSection onMarkerClick={handleMarkerClick} markers={favorites}  />
        </div>
      </div>
      <div className="section rightSections">
        <div className="content">
          <PhotoGallery photos={markerData ? markerData.photos : null} />
        </div>
      </div>
      <div className="section rightSections">
        <div className="content">
          <StreetViewSection coordinates={markerData ? markerData.streetViewCoordinates : null} />
        </div>
      </div>
      <div className="reload-button">
        <button onClick={reloadPage}>Reîncarcă harta</button>
      </div>
      <div className="link-button">
        <button onClick={() => { window.location.href = '/menu'; }}>Înapoi la meniu</button>
      </div>
      {isMarkerOpen && (
        <div className="favorites-button">
          <button onClick={() => removeFromFavorites(markerData.id)}>Scoate de la favorite</button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
