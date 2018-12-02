import React from 'react';
import ReactDOMServer from 'react-dom/server'; // can render a react app into a string
import axios from 'axios'; // provide data server-side
import StoreApi from 'StoreApi';
import config from 'config';

import App from 'components/App';

// allows rendering WITHOUT JAVASCRIPT
const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new StoreApi(resp.data);

  return {
    initialMarkup: ReactDOMServer.renderToString( 
      <App store={store} /> 
    ),
    initialData: resp.data
  };
};

export default serverRender;

