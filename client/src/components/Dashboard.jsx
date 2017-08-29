import React from 'react';
import ReactDOM from 'react-dom';
import GMap from './GMap.jsx';
import Listings from './Listings.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="row">
          
        <section className="col-sm-8"> 
          <GMap />
        </section>

        <aside className="col-sm-4">
          <Listings />
        </aside>

      </div>
    );
  }
}

export default Dashboard;