import React from 'react';
import ReactDOM from 'react-dom';

const ListingsEntries = (props) => {
  const styles = {
    highlight: {
      background: '#2BBBAD'
    },
    icon: {
      height: '20px',
      float: 'left'
    }
  }
  
  return (
    <div>
    { props.highlight === props.result.id
      ? <div>
          <a className="list-group-item list-group-item-action flex-column align-items-start active" onClick={() => props.openWindow(props.index)}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{props.result.name}</h5>
                { props.result.opening_hours.open_now
                  ? <small>Open now</small>
                  : <small>Closed</small>
                }
            </div>
            <p className="mb-1">{props.result.vicinity}</p>
            <small><img src={props.result.icon} style={styles.icon}/></small>
          </a>
        </div>
      : <div>
          <a className="list-group-item list-group-item-action flex-column align-items-start" onClick={() => props.openWindow(props.index)}>
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.result.name}</h5>
                { props.result.opening_hours.open_now
                  ? <small className="text-muted">Open now</small>
                  : <small className="text-muted">Closed</small>
                }
              </div>
              <p className="mb-1">{props.result.vicinity}</p>
              <small className="text-muted"><img src={props.result.icon} style={styles.icon}/></small>
            </a>
        </div>
    }
        
    </div>
  );
}

export default ListingsEntries;
