import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">
            <div className="md-form">
                <input type="text" id="location-search" className="form-control" />
                <label htmlFor="location-search" className="">Where do you want to go?</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;