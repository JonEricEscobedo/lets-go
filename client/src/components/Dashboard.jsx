import React from 'react';
import ReactDOM from 'react-dom';
import GMap from './GMap.jsx';
import Listings from './Listings.jsx';
import GoogleMapReact from 'google-map-react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // results: [],
      // markers: [],
      // highlight: null
    }

    // this.createMapOptions = this.createMapOptions.bind(this);
    // this.getPlacesResults = this.getPlacesResults.bind(this);
    // this.createMarker = this.createMarker.bind(this);
    // this.openWindow = this.openWindow.bind(this);
    // this.infowindow = null;
    // this.map = null;
    // this.markers = [];
  }

  // createMapOptions(map) {
  //   let context = this;

  //   initialize();

  //   function initialize() {
  //     let destination = {lat: 37.7749, lng: -122.42};

  //     map = new google.maps.Map(document.getElementById('test'), {
  //       center: destination,
  //       zoom: 15
  //     });

  //     context.infowindow = new google.maps.InfoWindow();
  //     let service = new google.maps.places.PlacesService(map);

  //     service.nearbySearch({
  //       location: destination,
  //       radius: 500,
  //       type: ['store']
  //     }, getPlacesResults);
  //   }

  //   function getPlacesResults(results, status) {
  //     console.log(results);

  //     context.setState({ results: results });

  //     if (status === google.maps.places.PlacesServiceStatus.OK) {
  //       for (let i = 0; i < results.length; i++) {
  //         createMarker(results[i]);
  //       }
  //     }

  //   }


  //   function createMarker(place) {
  //     let placeLoc = place.geometry.location;
  //     let marker = new google.maps.Marker({
  //       map: map,
  //       position: place.geometry.location
  //     });

  //     google.maps.event.addListener(marker, 'click', function() {
  //       context.infowindow.setContent(place.name);
  //       context.infowindow.open(map, this);
  //       context.setState({highlight: place.id});
  //     });
  //   }
  // }

  // createMapOptions(map) {
  //   let context = this;
  //   let destination = {lat: 37.7749, lng: -122.42};

  //   this.map = new google.maps.Map(document.getElementById('test'), {
  //     center: destination,
  //     zoom: 15
  //   });

  //   this.infowindow = new google.maps.InfoWindow();
  //   let service = new google.maps.places.PlacesService(this.map);

  //   google.maps.event.addListener(this.map, 'click', function() {
  //     context.infowindow.close();
  //     context.setState({highlight: null});  
  //   });

  //   service.nearbySearch({
  //     location: destination,
  //     radius: 500,
  //     type: ['store']
  //   }, this.getPlacesResults);
  // }

  // getPlacesResults(results, status) {
  //   // console.log(results);
  //   let context = this;
  //   this.setState({ results: results });
        
  //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     for (let i = 0; i < results.length; i++) {
  //       this.createMarker(results[i]);
  //     }
  //     this.setState({markers: context.markers});
  //     // console.log('END!', this.state.markers)
  //   }
  // }

  // createMarker(place) {
  //   let context = this;
  //   let placeLoc = place.geometry.location;
  //   let marker = new google.maps.Marker({
  //     map: context.map,
  //     position: place.geometry.location
  //   });

  //   google.maps.event.addListener(marker, 'click', function() {
  //     context.infowindow.setContent(place.name);
  //     context.infowindow.open(context.map, this);
  //     context.setState({highlight: place.id});
  //   });

  //   this.markers.push(marker);
  // }

  // openWindow(id) {
  //   let context = this
  //   google.maps.event.trigger(context.markers[id], 'click');
  // }


  render() {
    return (
      <div className="row">
          
        <section className="col-sm-8"> 
          <GMap 
            createMapOptions={this.props.createMapOptions}
          />
        </section>

        <aside className="col-sm-4">
          <Listings 
            results={this.props.results}
            highlight={this.props.highlight}
            markers={this.props.markers}
            openWindow={this.props.openWindow}
          />
        </aside>

      </div>
    );
  }
}

export default Dashboard;