import React from 'react';
import ReactDOM from 'react-dom';

import StateApi from 'StateApi';
import App from 'components/App';

// intial data for this is in /renderers/server.js
// in ejs script tag, attached to window object
// spread into template in /renderers/server.js via initialMarkup and initialData
// state refactor
// const initialData = {
//   articles: {},
//   authors: {}
// };

// store refactor
const store = new StateApi( window.initialData );

ReactDOM.hydrate(
  // <App initialData={window.initialData} />, // store refactor
  <App store={store} />,
  document.getElementById('root')
);

export default App;