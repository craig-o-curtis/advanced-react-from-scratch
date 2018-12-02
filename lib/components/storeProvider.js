import React from 'react';
import PropTypes from 'prop-types';

// This is a function that receives a regular React functional component
// Wraps it with a new component
// Fetches the store from the context API
// and returns the store as a prop
const storeProvider = ( Component ) => {
  // creates and returns a high-order container component
  const WithStore = ( props, { store } ) => { // destructure store from context object
    return (
      <Component {...props} store={store} />
    );
  };

  WithStore.contextTypes = {
    store: PropTypes.object
  };

  return WithStore;
};

export default storeProvider;