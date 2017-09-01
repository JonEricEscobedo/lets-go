import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Dashboard from './Dashboard.jsx';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      results: [],
      markers: [],
      category: 'restaurant',
      loading: false,
      highlight: null,
      coordinates: null
    };

    // Search component functions
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleAddressSelect = this.handleAddressSelect.bind(this);
    this.handleCategorySelect = this.handleCategorySelect.bind(this);

    // Google map component functions
    this.getPlacesResults = this.getPlacesResults.bind(this);
    this.openWindow = this.openWindow.bind(this);

    // Additional Google Map variables used in App.jsx
    this.infowindow = null;
    this.map = null;
    this.markers = [];
  }

  // Detect text input changes in search box
  handleAddressChange(address) {
    this.setState({
      address,
      coordinates: null
    });
  } // End of handleAddressChange

  // Get coordinates for selected location
  handleAddressSelect(address) {
    this.setState({
      address,
      loading: true
    });

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('Coordinates:', { lat, lng });
        this.setState({ 
          coordinates: [lat, lng],
          loading: false
        });
        this.initializeMap();
      })
      .catch((error) => {
        console.log('There was an error with the request', error);
        this.setState({ 
          loading: false
        });
      });
  } // End of handleAddressSelect

  // Handles category selection
  handleCategorySelect(type) {
    this.setState({category: type});
    console.log(type);
  } // End of handleCategorySelect

  // Build GoogleMap
  initializeMap() {
    let context = this;
    let destination = {lat: 37.783052, lng: -122.3932187};

    if (this.state.coordinates) {
      destination = {lat: this.state.coordinates[0], lng: this.state.coordinates[1]};
    }

    this.map = new google.maps.Map(document.getElementById('g-map'), {
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
      // type: ['campground']
      type: [context.state.category]
    }, this.getPlacesResults);

    return {
      minZoomOverride: true
    };
  } // End of initializeMap

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
            category={this.state.category}
            handleCategorySelect={this.handleCategorySelect}
            handleAddressChange={this.handleAddressChange}
            handleAddressSelect={this.handleAddressSelect}
          />
        </nav>

        <section>
          {this.state.loading ? <div><i className="fa fa-spinner fa-pulse fa-3x fa-fw Demo__spinner" /></div> : null}
          {!this.state.loading && this.state.coordinates ?
            <Dashboard 
              results={this.state.results}
              highlight={this.state.highlight}
              markers={this.state.markers}
              openWindow={this.openWindow}
              coordinates={this.state.coordinates}
              className="sticky-map"
            />
            : null}
        </section>

        <footer>
        </footer>

      </div>
    );
  }
}

export default App;
