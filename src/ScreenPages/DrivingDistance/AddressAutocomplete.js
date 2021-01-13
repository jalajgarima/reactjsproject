import React from 'react'
import './DrivingDistance.css'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'

const AddressAutocomplete = ({
  addressHooks,
  setAddressHooks,
  placeholder,
}) => {
  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => setAddressHooks(address))

      .catch((error) => console.error('Error', error))
  }
  const searchOptions = {
    componentRestrictions: { country: ['au'] },
    // types: ['address'],
  }

  return (
    <div>
      <PlacesAutocomplete
        value={addressHooks}
        onChange={setAddressHooks}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Enter Location Address',
                className: 'location-search-input',
                autoFocus: true,
              })}
            />
            <div
              key={suggestions.description}
              className="autocomplete-dropdown-container"
            >
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item'
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: 'lightblue', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' }
                return (
                  <div
                    // className="input-suggestion"
                    key={index}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  )
}

export default AddressAutocomplete
