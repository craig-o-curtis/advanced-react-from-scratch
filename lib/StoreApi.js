import { has, isEmpty } from 'lodash';

class StoreApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject( rawData.articles ),
      authors: this.mapIntoObject( rawData.authors )
    };
  }

  mapIntoObject(arr) { 
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  }

  getStore = () => {
    return this.data;
  }

}

export default StoreApi;