import React, { useState } from 'react';
import './styles/Main.css'; 
import PhotoGallery from './PhotoGallery'; 
import MapSection from './MapSection';
import StreetViewSection from './StreetViewSection';
import { useParams } from 'react-router-dom';

const Main = () => {
  const { level } = useParams(); 

  const levelContent = {
    neoromanesc: {
      initialText: 'Initial text for Level 1',
      photos: ['level1_photo1.jpg', 'level1_photo2.jpg'],
      streetViewConfig: { coordinates: { lat: 44.431737, lng: 26.0751484 }, heading: 243, pitch: 10 },
      markers: [
        { name: 'Muzeul de Artă Populară „Profesor Dr. Nicolae Minovici”', coordinates: [44.48432, 26.07523], text: 'Cristofi Cerchez (1906-1907). Cunoscută și ca "Vila doctorului Minovici" sau "Vila cu clopoței". A fost ridicată pentru a adăposti colecția de ceramică populară a savantului pasionat de folclor. Clădirea asosciază și îmbină forme proprii ale culelor (reședințe fortificate) boierești cu expresia caselor țărănești din Valahia subcarpatică șî cu elemente de influență religioasă. Fațada atestă rezonanțe certe între spiritul Art Nouveau european și căutările unei stilistici neoromânești. De observat banca ornamentală din piatră aflată lângă vilă, la șosea.', photos: ['./poza3.jpg', './poza4.jpg'], streetViewConfig: { coordinates: { lat: 44.4843126, lng: 26.0758278 }, heading: 265, pitch: 10 } },
        { name: 'Casa Malaxa', coordinates: [44.45909, 26.08811], text:'Petre Antonescu(1930) . Actual Institut cultural român', photos: ['./poza3.jpg', './poza4.jpg'], streetViewConfig: { coordinates: { lat: 44.4588885, lng: 26.0880537}, heading: 0, pitch: 30 } },
        { name: 'Muzeul Național al Țăranului român', coordinates: [44.45451, 26.08404], text:'Nicolae Ghica-Budești (1912-1941)', photos: ['./poza3.jpg', './poza4.jpg'], streetViewConfig: { coordinates: { lat: 44.4550415,lng: 26.0840404 }, heading: 189, pitch: 30 } },
        { name: 'Institutul și Muzeul Geologic Național', coordinates: [44.45484, 26.0851], text:'Victor Ștephănescu (1906-1924?). Captivante colecții de minerale și fosile.', photos: ['./poza3.jpg', './poza4.jpg'], streetViewConfig: { coordinates: { lat: 44.4547594, lng: 26.084787 }, heading: 65, pitch: 30 } },
        { name: 'Primăria "de Verde"', coordinates: [44.45379, 26.07387], text:'Nicu Georgescu și Gheorghe Cristinel (1927-1929). Actuală Primărie a Sectorului 1. Între 1927 și 1944, Bucureștiul era împărțit în 4 sectoare: Galben, Negru , Albastru și Verde (de unde și denumirea).', photos: ['./poza3.jpg', './poza4.jpg'], streetViewConfig: { coordinates: { lat:44.4539837, lng: 26.0746812  }, heading: 259, pitch: 30 } },
        { name: 'Vila Mavrodin', coordinates: [44.44948, 26.08991], text:'Petre Antonescu (1904-1910?). Actual centru cultural', photos: ['./poza3.jpg', './poza4.jpg'], streetViewConfig: { coordinates: { lat: 44.4496479, lng: 26.0898846 }, heading: 154, pitch: 20 } },
        { name: 'Casa Dissescu', coordinates: [44.44863, 26.08918], text:'Grigore Cerchez (1910-1912). Actual Institut de istoria artei.', photos: ['./poza3.jpg', './poza4.jpg'], streetViewConfig: { coordinates: { lat: 44.4485489, lng: 26.0889662 }, heading: 56, pitch: 20 } },
        { name: 'Așezămintele I.C.Brătianu', coordinates: [44.44509, 26.0932], text:'Petre Antonescu (1908-1911, 1929). Actuale centru cultural și bibliotecă.', photos: ['./poza3.jpg', './poza4.jpg'], streetViewConfig: { coordinates: { lat: 44.444623, lng: 26.0935055 }, heading: 17, pitch: 30 } },
        { name: 'Bloc al Casei Autonome a Monopolurilor', coordinates: [44.44592, 26.10109], text:'Lucian Teodosiu (1926-1929)', photos: ['./poza3.jpg', './poza4.jpg'], streetViewConfig: { coordinates: { lat: 44.4462248, lng: 26.101444 }, heading: 101, pitch: 40 } },
        { name: 'Palatul Ministerului Lucrărilor Publice', coordinates: [44.43449, 26.09315], text:'Petre Antonescu (1906-1910). Actuală Primărie generală a capitalei.', photos: ['./poza3.jpg', './poza4.jpg'], streetViewConfig: { coordinates: { lat: 44.434644, lng: 26.0931079 }, heading: 175, pitch: 40 } },
        { name: 'Palatul ziarului Universul', coordinates: [44.43565, 26.09455], text:'Paul Smărăndescu (1926-1930)', photos: ['./poza3.jpg', './poza4.jpg'], streetViewConfig: { coordinates: { lat: 44.4356046,lng: 26.0949143 }, heading: 270, pitch: 40 } },
        { name: 'Palatul Institutului și Școlii de arhitectură', coordinates: [44.43644, 26.10065], text:'Grigore Cerchez (1912-1927)', photos: ['./poza3.jpg', './poza4.jpg'], streetViewConfig: { coordinates: { lat: 44.4365394, lng: 26.1007023 }, heading: 195, pitch: 50 } },
      ]
    },
    artdeco: {
      initialText: 'Initial text for Level 2',
      photos: ['level2_photo1.jpg', 'level2_photo2.jpg'],
      streetViewConfig: { coordinates: { lat: 51.51, lng: -0.09 }, heading: 270, pitch: 0 },
      markers: [
        { name: 'Location B', coordinates: [51.51, -0.09], text: 'Text for Location B', photos: ['photo3.jpg', 'photo4.jpg'], streetViewConfig: { coordinates: { lat: 51.51, lng: -0.1 }, heading: 0, pitch: 0 } },
      ]
    },
  };

  const { initialText, photos, streetViewConfig, markers } = levelContent[level];

  const [markerData, setMarkerData] = useState(null);
  const [isMarkerOpen, setIsMarkerOpen] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const toggleFavorite = (id) => {
    const selectedMarker = markers.find(marker => marker.id === id);
    const index = favorites.findIndex(favorite => favorite.id === id);
    
    if (index === -1) {
      setFavorites([...favorites, selectedMarker]);
    } else {
      setFavorites(favorites.filter(favorite => favorite.id !== id));
    }
    
    localStorage.setItem('favorites', JSON.stringify([...favorites, selectedMarker]));
  };

  const handleMarkerClick = (data) => {
    setMarkerData(data);
    setIsMarkerOpen(true);
  };

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
                <p>{initialText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="section">
        <div className="content">
           <MapSection onMarkerClick={handleMarkerClick} markers={markers}  />
        </div>
      </div>
      <div className="section rightSections">
        <div className="content">
          <PhotoGallery photos={markerData ? markerData.photos : photos} />
        </div>
      </div>
      <div className="section rightSections">
        <div className="content">
          <StreetViewSection config={markerData ? markerData.streetViewConfig : streetViewConfig} />
        </div>
      </div>
      {isMarkerOpen && (
        <div className="reload-button">
          <button onClick={reloadPage}>Înapoi la informațiile generale</button>
        </div>
      )}
      <div className="link-button">
        <button onClick={() => { window.location.href = '/level'; }}>Înapoi la stiluri</button>
      </div>
      {isMarkerOpen && (
      <div className="favorites-button">
        <button onClick={() => toggleFavorite(markerData.id)}>Adaugă la favorite</button>
      </div>
      )}
    </div>
  );
};

export default Main;

