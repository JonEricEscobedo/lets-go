import React from 'react';
import ReactDOM from 'react-dom';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const Search = (props) => {
  const AutocompleteItem = ({ formattedSuggestion }) => (
    <div className="suggestion-item">
      <i className='fa fa-map-marker'/>
      <strong> {formattedSuggestion.mainText}</strong>{' '}
      <small className="text-muted">{formattedSuggestion.secondaryText}</small>
    </div>);
  
  const cssClasses = {
    root: 'form-group',
    autocompleteContainer: 'autocomplete-container',
  };

  const inputProps = {
    type: 'text',
    value: props.address,
    onChange: props.handleAddressChange,
    autoFocus: true,
    placeholder: 'Select a category and type a location...',
  };


  const myStyles = {
    autocompleteItemActive: { color: '#aa66cc' } // hover color of item
  };

  return (
    <div>

      <nav className="row">
        <div className="col-sm-4 text-center">
          <button className="btn btn-outline-primary waves-effect btn-sm" onClick={() => props.handleCategorySelect('restaurant')}>Eat</button>
          <button className="btn btn-outline-default waves-effect btn-sm" onClick={() => props.handleCategorySelect('bar')}>Drink</button>
          <button className="btn btn-outline-secondary waves-effect btn-sm" onClick={() => props.handleCategorySelect('atm')}>Find money</button>
        </div>
        <div className="col-sm-8">
          <PlacesAutocomplete
            onSelect={props.handleAddressSelect}
            onEnterKeyDown={props.handleAddressSelect}
            autocompleteItem={AutocompleteItem}
            classNames={cssClasses}
            inputProps={inputProps}
            googleLogo={true}
            styles={myStyles}
          />
        </div>
      </nav>
    
    </div>
  );
};

export default Search;
