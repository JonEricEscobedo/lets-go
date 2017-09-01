import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './GoogleMap.jsx';
import PlacesList from './PlacesList.jsx';
import GoogleMapReact from 'google-map-react';

const Dashboard = (props) => {
  return (
    <div className="row">
        
      <section className="col-sm-8"> 
        <GoogleMap 
          createMapOptions={props.createMapOptions}
        />
      </section>

      <aside className="col-sm-4">
        <PlacesList 
          results={props.results}
          highlight={props.highlight}
          markers={props.markers}
          openWindow={props.openWindow}
        />
      </aside>

    </div>
  );
}

export default Dashboard;