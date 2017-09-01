import React from 'react';
import ReactDOM from 'react-dom';

const ListingsEntries = (props) => {
  const styles = {
    highlight: {
      background: '#4285F4'
    },
    icon: {
      height: '20px',
      float: 'left'
    }
  };

  const InfoCard = () => (
    <div>
      <a 
        className="list-group-item list-group-item-action flex-column align-items-start" 
        style={props.highlight === props.result.id ? styles.highlight : null} 
        onMouseOver={ () => { props.openWindow(props.index); } }
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{props.result.name}</h5>
          { props.result.opening_hours ? (props.result.opening_hours.open_now ? <small>Open now</small> : <small>Closed</small>) : <small></small> }
        </div>
        <p className="mb-1">{props.result.vicinity}</p>
        <small><img src={props.result.icon} style={styles.icon}/></small>
      </a>
    </div>
  );

  return (
    <div>
      <InfoCard />
    </div>
  );
};

export default ListingsEntries;
