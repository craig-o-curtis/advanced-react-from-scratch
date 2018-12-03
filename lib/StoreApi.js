class StoreApi {
  constructor(rawData) {
    this.data = {
      articles: this._mapIntoObject( rawData.articles ),
      authors: this._mapIntoObject( rawData.authors ),
      searchTerm: '',
      timestamp: new Date()
    };
    // redux-style refactor
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  _mapIntoObject(arr) {
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

  // redux-style refactor
  subscribe = ( cb ) => {
    this.lastSubscriptionId++;
    this.subscriptions[ this.lastSubscriptionId ] = cb;
    return this.lastSubscriptionId;
  }

  // redux-style refactor
  unsubscribe = ( subscriptionId ) => {
    delete this.subscriptions[ subscriptionId ];
  }

  _notifySubscribers = () => {
    // loop over all callbacks on this.subscriptions
    Object.values( this.subscriptions ).forEach( ( cb ) => cb() );
  }

  // Updates state, then notifies subscribers
  _mergeWithState = ( stateChange ) => {
    this.data = {
      ...this.data, // original data
      ...stateChange // new data
    };
    this._notifySubscribers();
  }

  // redux-style refactor
  setSearchTerm = ( searchTerm ) => {
    // this.data.searchTerm = searchTerm;
    // this.notifySubscribers();
    this._mergeWithState({
      searchTerm,
    });
  }

  resetSearchTerm = () => {
    // // instead of:
    // this.data.searchTerm = '';
    // this.notifySubscribers();
    // // just have merge function merge then notify
    this._mergeWithState({
      searchTerm: ''
    });
  }

  // handle timestamp interval
  startClock = () => {
    setInterval(() => {
      this._mergeWithState({
        timestamp: new Date()
      });
    },1000);
  }

}

export default StoreApi;