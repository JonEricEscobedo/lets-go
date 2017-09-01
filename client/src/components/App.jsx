import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Dashboard from './Dashboard.jsx';
import GoogleMapReact from 'google-map-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: [],
      markers: [],
      highlight: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
    this.fetchPlaces = this.fetchPlaces.bind(this);

    this.createMapOptions = this.createMapOptions.bind(this);
    this.getPlacesResults = this.getPlacesResults.bind(this);
    this.createMarker = this.createMarker.bind(this);
    this.openWindow = this.openWindow.bind(this);
    this.infowindow = null;
    this.map = null;
    this.markers = [];
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

  createMapOptions(map) {
    let context = this;
    let destination = {lat: 37.7749, lng: -122.42};

    this.map = new google.maps.Map(document.getElementById('test'), {
      center: destination,
      zoom: 15
    });

    this.infowindow = new google.maps.InfoWindow();
    let service = new google.maps.places.PlacesService(this.map);

    google.maps.event.addListener(this.map, 'click', function() {
      context.infowindow.close();
      context.setState({highlight: null});  
    });

    service.nearbySearch({
      location: destination,
      radius: 500,
      type: ['store']
    }, this.getPlacesResults);
  }

  getPlacesResults(results, status) {
    console.log(results);
    let context = this;
    this.setState({ results: results });
        
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
      this.setState({markers: context.markers});
      // console.log('END!', this.state.markers)
    }
  }

  createMarker(place) {
    let context = this;
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
      map: context.map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function() {
      context.infowindow.setContent(place.name);
      context.infowindow.open(context.map, this);
      context.setState({highlight: place.id});
    });

    this.markers.push(marker);
  }

  openWindow(id) {
    let context = this
    google.maps.event.trigger(context.markers[id], 'click');
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
          <Dashboard 
            createMapOptions={this.createMapOptions}
            results={this.state.results}
            highlight={this.state.highlight}
            markers={this.state.markers}
            openWindow={this.openWindow}
          />
        </section>

        <footer>
        </footer>

      </div>
    );
  }
}

export default App;
