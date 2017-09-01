import React from 'react';
import ReactDOM from 'react-dom';
import PlacesListEntry from './PlacesListEntry.jsx';


const Listings = (props) => {
  const loading = props.markers.length === 0;    

  return (
    <div>
      <div className="list-group">
        { loading ? 
          <li className="list-group-item">Loading</li>
          : <div>{props.results.map((result, idx) => {
            return (
              <PlacesListEntry 
                result={result} 
                highlight={props.highlight} 
                marker={props.markers[idx]} 
                openWindow={props.openWindow}
                index={idx} 
                key={idx} 
              />
            );
          })}</div>
        }
      </div>
    </div>
  );
};

export default Listings;
