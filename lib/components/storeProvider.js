import React from 'react';
import PropTypes from 'prop-types';

// This is a function that receives a regular React functional component
// Wraps it with a new component
// Fetches the store from the context API
// and returns the store as a prop
// const storeProvider = ( Component ) => { // container-store-method refactor
// make childExtraProps optional via default params
const storeProvider = ( childExtraProps = ()=>({}) ) => ( Component ) => { // function that returns another function
  // childExtraProps is from child component wrapped in this store container component
  // PureComponent -- if props and state don't change, don't rerender
  return class extends React.PureComponent {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    // need to subscribe to store on PureComponent
    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe( this.onStoreChange );
    }
    componentWillUnmount() {
      this.context.store.unsubscribe( this.subscriptionId );
      this.subscriptionId = null;
    }
    onStoreChange = () => {
      if (this.subscriptionId) {
        // rerender component on store change
        this.forceUpdate(); // well this is extremely hacky -- $scope.$apply(), $scope.$digest()
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          {...childExtraProps( this.context.store, this.props ) }
          store={this.context.store} 
        />
      );
    }

  };

  // // refactor to class component
  // // creates and returns a high-order container component
  // const WithStore = ( props, { store } ) => { // destructure store from context object
  //   return (
  //     <Component {...props} store={store} />
  //   );
  // };

  // WithStore.contextTypes = {
  //   store: PropTypes.object
  // };

  // // dynamically name container component
  // WithStore.displayName = `${Component.name}Container`;

  // return WithStore;
};

export default storeProvider;