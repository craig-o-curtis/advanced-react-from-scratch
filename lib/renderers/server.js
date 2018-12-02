import React from 'react';
import ReactDOMServer from 'react-dom/server'; // can render a react app into a string
import axios from 'axios'; // provide data server-side
import StateApi from 'StateApi'; // state refactor // previously was DataApi
import config from 'config';

import App from 'components/App';


// allows rendering WITHOUT JAVASCRIPT
const serverRender = async () => {
  // const res = await axios.get('/data'); // async refactor
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StateApi(resp.data);

  // state refactor
  // const initialData = {
  //   articles: api.getArticles(),
  //   authors: api.getAuthors()
  // };

  return {
    initialMarkup: ReactDOMServer.renderToString( 
      // <App initialData={initialData} /> // state refactor
      <App store={store} /> 
    ),
    // initialData // state refactor
    initialData: resp.data
  };

};

export default serverRender;

