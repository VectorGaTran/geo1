import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconUrl from './mapicon.png'; 

const MapSection = ({ onMarkerClick, markers }) => {
  const mapRef = useRef(null); 

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map', {  
        center: [44.4503, 26.0876], // Initial coordinates
        zoom: 11, // Initial zoom level
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      mapRef.current = map;

      const customIcon = L.icon({
        iconUrl: iconUrl,
        iconSize: [24, 32], 
        iconAnchor: [16, 42], 
        popupAnchor: [0, -30],
      });

      markers.forEach(location => {
        const marker = L.marker(location.coordinates, { icon: customIcon })
          .addTo(map)
          .bindPopup(`<b>${location.name}</b>`); 
        marker.on('click', () => {
          onMarkerClick(location);
        });
      });
    }

    return () => {
    };
  }, [markers, onMarkerClick]); 

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    ></div>
  );
};

export default MapSection;
