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
    return (
      <div>
        Inside Listings.jsx
        <ListingsEntries />
      </div>
    );
  }
}

export default Listings;