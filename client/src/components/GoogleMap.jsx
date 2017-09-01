import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';

const GoogleMap = (props) => {
  const styles = {
    map: {
      height: 450,
    },
    center: {
      lat: 37.7749,
      lng: -122.42,
    }
  };

  return (
    <div>
      <div style={styles.map} id="g-map">
        <GoogleMapReact
          center={styles.center}
          zoom={5}
          options={props.createMapOptions}
        />
      </div>
    </div>
  );
  
};

export default GoogleMap;
