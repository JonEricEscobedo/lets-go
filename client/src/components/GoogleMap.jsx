import React from 'react';
import ReactDOM from 'react-dom';

const GoogleMap = (props) => {
  const styles = {
    map: {
      height: 450,
    }
  };

  return (
    <div>
      <section style={styles.map} id="g-map">
      </section>
    </div>
  );
  
};

export default GoogleMap;
