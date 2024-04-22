import React from 'react';
import { StreetViewPanorama, GoogleMap } from '@react-google-maps/api';

const StreetViewSection = ({ config }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%", 
    borderRadius: "20px"
  };

  const { coordinates, heading, pitch } = config || { lat: 44.4273033, lng: 26.0909, heading: 272, pitch: 10 };

  const apiKey = ""; 

  return (
    <div className="street-view-section" style={{ width: '100%', height: '100%' }}>
      <GoogleMap
        id="street-view-map"
        mapContainerStyle={mapContainerStyle}
        center={coordinates}
        zoom={14}
        options={{
          streetViewControl: true 
        }}
        apiKey={apiKey}
      >
        <StreetViewPanorama
          position={coordinates}
          visible={true}
          options={{
            pov: { heading: heading, pitch: pitch },
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default StreetViewSection;
