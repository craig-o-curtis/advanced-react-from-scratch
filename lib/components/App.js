// Fundamentals
import React from 'react';

// data now handled server-side in /renderers/server.js
// import axios from 'axios';
// API
// import DataApi from '../DataApi';
// now to StateApi
// import data from '../testData.json'; // mock api only

// Components
import ArticleList from './ArticleList';

// const api = new DataApi(data); // mock api only

class App extends React.Component {
  // state refactor
  // state = {
  //   loadState: 'Loading...',
  //   // initialData from renderers/server.js // mock api only
  //   articles: this.props.initialData.articles,
  //   authors: this.props.initialData.authors
  // }
  state = this.props.store.getState();

  // now handled via renderers/server.js
  // async componentDidMount() {
  //   // fetch data from endpoint
  //   const resp = await axios.get('/data'); // is async
  //   const api = new DataApi(resp.data);
  //   this.setState(() => ({
  //     loadState: 'Loaded',
  //     articles: api.getArticles(),
  //     authors: api.getAuthors()
  //   }));
  // }

  asyncLoaded = () => {
    return Promise.resolve('Loaded').reject('Error');
  }

  /**
   * Functional components should not be smart,
   * But this one should be, 
   * so add logic in this class, pass down as methods
   */
  // lookUpAuthor
  // state refactor
  // articleActions = {
  //   lookUpAuthor: authorId => this.state.authors[authorId]
  // }


  render() {
    return (
      <div>
        <h2>{this.state.loadState}</h2>
        {/* state refactor */}
        {/* <ArticleList 
          articles={this.state.articles}
          // authors={this.state.authors}
          articleActions={this.articleActions}
        /> */}
        <ArticleList 
          articles={this.state.articles}
          // authors={this.state.authors}
          store={this.props.store}
        />
      </div>
    );
  }
} 

export default App;