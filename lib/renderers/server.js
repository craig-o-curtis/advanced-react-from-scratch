import React from 'react';
import ReactDOMServer from 'react-dom/server'; // can render a react app into a string

import App from 'components/App';

// allows rendering WITHOUT JAVASCRIPT
const serverRender = () => {
  return ReactDOMServer.renderToString( <App /> );
};

export default serverRender;

