import React from 'react';
import ReactDOM from 'react-dom';
import ListingsEntries from './ListingsEntries.jsx';

class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }


  render() {
    const loading = this.props.markers.length === 0;    

    return (
      <div>
        <div className="list-group">
          { loading 
            ? <li className="list-group-item">Loading</li>
            : <div>{this.props.results.map((result, idx) => {
                return (
                  <ListingsEntries result={result} highlight={this.props.highlight} marker={this.props.markers[idx]} index={idx} key={Math.random() * 1000} openWindow={this.props.openWindow}/>
                );
              })}</div>
          }
        </div>
      </div>
    );
  }
}

export default Listings;