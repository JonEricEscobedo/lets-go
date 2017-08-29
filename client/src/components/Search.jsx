import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div>

        <div className="row">
          <div className="col-sm-6">
            <div className="md-form">
                <input type="text" id="location-search" className="form-control" value={this.props.query} onChange={this.props.handleChange} />
                <label htmlFor="location-search" className="">Where do you want to go?</label>
            </div>
          </div>
          <div className="col-sm-2">
            <button type="button" className="btn btn-default" onClick={this.props.submitQuery}>Find!</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Search;
