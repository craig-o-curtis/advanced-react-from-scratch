import { has, isEmpty } from 'lodash';

class StoreApi {
  constructor(rawData) {
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

export default StoreApi;