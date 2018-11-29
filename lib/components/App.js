// Fundamentals
import React from 'react';
// API
import DataApi from '../DataApi';
import data from '../testData.json';
// Components
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      answer: 42,
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  asyncFunc = () => {
    return Promise.resolve(23);
  }

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  render() {
    return (
      <div>
        <h2>Tests {this.state.answer}</h2>
        <ArticleList 
          articles={this.state.articles}
          authors={this.state.authors}
        />
      </div>
    );
  }
} 

export default App;