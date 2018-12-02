// Fundamentals
import React from 'react';
// Components
import ArticleList from './ArticleList';

class App extends React.Component {
  state = this.props.store.getStore();

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
          store={this.props.store}
        />
      </div>
    );
  }
} 

export default App;