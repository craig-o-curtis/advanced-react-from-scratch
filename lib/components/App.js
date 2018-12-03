// Fundamentals
import React from 'react';
import PropTypes from 'prop-types';
// utils
import pickBy from 'lodash.pickby'; // is filter() for objects
// Components
import ArticleList from 'components/ArticleList';
import SearchBar from 'components/SearchBar';
import Timestamp from 'components/Timestamp';


class App extends React.Component {
  /** Context Setup -- allows globals accessible to child components
   * NEW DEPRECATION - childContextTypes must NOW return a function...
   */
  static childContextTypes = {
    store: () => PropTypes.Object
  };
  getChildContext() { // method returns context object
    return {
      store: this.props.store
    };
  }
  /**
   * State
   * attach store { articles: ..., authors: ... } to state of component
   */
  state = this.props.store.getStore();
  // redux-style refactor
  // Searchbar - handle passed-up searchterm from child
  // setSearchTerm = ( searchTerm ) => {
  //   this.setState({ searchTerm });
  // }

  // update when store state changes - subscribe
  // redux-style refactor
  componentDidMount() {
    // manage state externally
    this.subscriptionId = this.props.store.subscribe( this.onStoreChange );
    // start timer
    this.props.store.startClock();

  }
  // redux-style refactor
  componentWillUnmount() {
    // manage state externally
    this.props.store.unsubscribe( this.subscriptionId );
  }

  onStoreChange = () => {
    // manage state externally
    this.setState( this.props.store.getStore() );
  }

  /**
   * Functional components should not be smart,
   * But this one should be, 
   * so add logic in this class, pass down as methods
   */
  render() {
    // filter articles according to search term
    let { articles, searchTerm } = this.state;

    if ( searchTerm ) {
      articles = pickBy( articles, (val) => {
        return val.title.includes(searchTerm)
          || val.body.includes(searchTerm);
      });
    }

    return (
      <div>
        {/* Method 1 - timestamp initialized in the storeapi */}
        {/* <Timestamp timestamp={this.state.timestamp} /> */}
        {/* Method 2 - Timestamp has its own provider, gets timestamp itself */}
        <Timestamp />
        <SearchBar 
          doSearch={this.props.store.setSearchTerm}
          doReset={this.props.store.resetSearchTerm}
        />
        <ArticleList 
          articles={articles}
        />
      </div>
    );
  }
} 

export default App;