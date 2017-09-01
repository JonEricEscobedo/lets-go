import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from './GoogleMap.jsx';
import PlacesList from './PlacesList.jsx';

const Dashboard = (props) => {
  return (
    <div className="row">
        
      <section className="col-sm-4">
        <PlacesList 
          results={props.results}
          highlight={props.highlight}
          markers={props.markers}
          openWindow={props.openWindow}
        />
      </section>

      <aside className="col-sm-8"> 
        <GoogleMap />
      </aside>


    </div>
  );
};

export default Dashboard;
