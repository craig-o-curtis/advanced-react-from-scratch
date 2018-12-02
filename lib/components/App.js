// Fundamentals
import React from 'react';
import PropTypes from 'prop-types';

// Components
import ArticleList from './ArticleList';

class App extends React.Component {
  state = this.props.store.getStore();

  // then define in child that uses this
  // required to make context object globally available to any component
  static childContextTypes = {
    store: PropTypes.Object
  };

  // method returns context object
  // define child context object
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  asyncLoaded = () => {
    return Promise.resolve('Loaded').reject('Error');
  }

  /**
   * Functional components should not be smart,
   * But this one should be, 
   * so add logic in this class, pass down as methods
   */
  render() {
    return (
      <div>
        <ArticleList 
          articles={this.state.articles}
          // store={this.props.store}
        />
      </div>
    );
  }
} 

export default App;