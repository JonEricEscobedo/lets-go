import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';


class GMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    const styles = {
      map: {
        height: 450,
      },
      center: {
        lat: 37.7749,
        lng: -122.42,
      }
    }

    return (
      <div>
        <div style={styles.map} id="test">
          <GoogleMapReact
            center={styles.center}
            defaultZoom={11}
            options={this.props.createMapOptions}
          />
        </div>
      </div>
    );
  }
}

export default GMap;