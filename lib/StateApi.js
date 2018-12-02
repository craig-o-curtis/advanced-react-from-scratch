import { has, isEmpty } from 'lodash';

class StateApi {
  constructor(rawData) {
    // state refactor
    // this.rawData = rawData;
    this.data = {
      articles: this.mapIntoObject( rawData.articles ),
      authors: this.mapIntoObject( rawData.authors )
    };
  }

  mapIntoObject(arr) { 
    if (Array.isArray(arr)) {
      return arr.reduce((acc, curr) => {
        acc[curr.id] = curr;
        return acc;
      }, {});
    }
  }

  // state refactor
  // getArticles() {
  //   return this.mapIntoObject(this.rawData.articles);
  // }

  // state refactor
  // getAuthors() {
  //   return this.mapIntoObject(this.rawData.authors);
  // }

  // state refactor
  // getState() {
  //   return {
  //     articles: this.getArticles(),
  //     authors: this.getAuthors()
  //   };
  // }

  // from lookupAuthor() {} to a class properties
  lookupAuthor = (authorId) => {
    if (
      has( this, 'data')
      && has( this.data, 'authors' )
      && has( this.data.authors, authorId )
      && !isEmpty( this.data.authors[authorId] )
    ) {
      return this.data.authors[authorId];
    }
  }

  getState = () => {
    return this.data;
  }

}

export default StateApi;