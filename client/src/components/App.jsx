import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Dashboard from './Dashboard.jsx';
import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      results: [],
      markers: [],
      highlight: null,
      coordinates: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.createMapOptions = this.createMapOptions.bind(this);
    this.getPlacesResults = this.getPlacesResults.bind(this);
    this.createMarker = this.createMarker.bind(this);
    this.openWindow = this.openWindow.bind(this);
    this.infowindow = null;
    this.map = null;
    this.markers = [];
  }

  // Detect text input changes in search box
  handleChange(address) {
    this.setState({
      address,
      coordinates: null
    });
  } // End of handleChange

  // Get coordinates for selected location
  handleSelect(address) {
    this.setState({
      address,
      loading: true
    });

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Coordinates:', { lat, lng });
        this.setState({ coordinates: [lat, lng]});
        this.createMapOptions();
      })
      .catch((error) => {
        console.log('There was an error with the request', error);
      });
  } // End of handleSelect

  // Build GoogleMap
  createMapOptions(map) {
    let context = this;
    let destination = {lat: 37.783052, lng: -122.3932187};

    if (this.state.coordinates) {
      destination = {lat: this.state.coordinates[0], lng: this.state.coordinates[1]};
    }

    this.map = new google.maps.Map(document.getElementById('g-map'), {
      center: destination,
      zoom: 10
    });

    this.infowindow = new google.maps.InfoWindow();
    let service = new google.maps.places.PlacesService(this.map);

    google.maps.event.addListener(this.map, 'click', function() {
      context.infowindow.close();
      context.setState({highlight: null});  
    });

    service.nearbySearch({
      location: destination,
      radius: 50000,
      type: ['campground']
    }, this.getPlacesResults);

    return {
      minZoomOverride: true
    };
  } // End of createMapOptions

  // Get results from places library
  getPlacesResults(results, status) {
    let context = this;
    this.setState({ results: results });
    this.markers = [];
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
      this.setState({markers: context.markers});
    }
  } // End of getPlacesResults

  // Create map pins for results
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
  } // End of createMarker

  // Open Google Map info window when location on list is selected
  openWindow(id) {
    let context = this;
    google.maps.event.trigger(context.markers[id], 'click');
  } // End of openWindow

  render() {
    return (
      <div className="container">

        <header>
          <h1 className="display-1 hero">LET'S GO</h1>
        </header>

        <nav>
          <Search 
            address={this.state.address}
            handleChange={this.handleChange}
            handleSelect={this.handleSelect}
          />
        </nav>

        <section>
          <Dashboard 
            createMapOptions={this.createMapOptions}
            results={this.state.results}
            highlight={this.state.highlight}
            markers={this.state.markers}
            openWindow={this.openWindow}
            coordinates={this.state.coordinates}
          />
        </section>

        <footer>
        </footer>

      </div>
    );
  }
}

export default App;
