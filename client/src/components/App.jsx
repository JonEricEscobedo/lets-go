import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Dashboard from './Dashboard.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
    this.fetchPlaces = this.fetchPlaces.bind(this);
  }

  // Detects input in text box
  handleChange(event) {
    this.setState( {query: event.target.value} );
  }

  // Submits query
  submitQuery() {
    this.fetchPlaces();
    this.setState( {query: ''} );
  }

  // Google Places External API
  fetchPlaces() {
    console.log(this.state.query);
  }

  render() {
    return (
      <div className="container">

        <header>
          <h1 className="display-1 hero">LET'S GO</h1>
        </header>

        <nav>
          <Search 
            query={this.state.query}
            handleChange={this.handleChange}
            submitQuery={this.submitQuery}
          />
        </nav>

        <section>
          <Dashboard />
        </section>

        <footer>
        </footer>

      </div>
    );
  }
}

export default App;
