import React from 'react';
import ReactDOM from 'react-dom';

import StoreApi from 'StoreApi';
import App from 'components/App';

// intial data for this is in /renderers/server.js
// in ejs script tag, attached to window object
// spread into template in /renderers/server.js via initialMarkup and initialData
const store = new StoreApi( window.initialData );

ReactDOM.hydrate(
  <App store={store} />,
  document.getElementById('root')
);

export default App;