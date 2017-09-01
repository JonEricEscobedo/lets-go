import React from 'react';
import ReactDOM from 'react-dom';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

const Search = (props) => {
  const AutocompleteItem = ({ formattedSuggestion }) => (
    <div className="Demo__suggestion-item">
      <i className='fa fa-map-marker'/>
      <strong> {formattedSuggestion.mainText}</strong>{' '}
      <small className="text-muted">{formattedSuggestion.secondaryText}</small>
    </div>);
  
  const cssClasses = {
    root: 'form-group',
    input: 'Demo__search-input',
    autocompleteContainer: 'Demo__autocomplete-container',
  };

  const inputProps = {
    type: 'text',
    value: props.address,
    onChange: props.handleChange,
    autoFocus: true,
    placeholder: 'Where do you want to go?',
  };

  return (
    <div>

      <div className="row">
        <div className="col-sm-8">
          <PlacesAutocomplete
            onSelect={props.handleSelect}
            onEnterKeyDown={props.handleSelect}
            autocompleteItem={AutocompleteItem}
            classNames={cssClasses}
            inputProps={inputProps}
            googleLogo={true}
          />
        </div>
      </div>
    
    </div>
  );
};

export default Search;
