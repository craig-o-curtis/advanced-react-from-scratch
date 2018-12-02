import express from 'express';
import config from './config';
import serverRender from './renderers/server';

// don't destructure here
import data from './testData.json';

const app = express();

app.use( express.static( 'public' ) ); // express.static is middleware to explose publicdir
app.set( 'view engine', 'ejs' );

app.get('/', async (req, res) => {
  const initialContent = await serverRender();
  res.render('index', { ...initialContent } );
});

// expose endpoint
app.get('/data', (req, res) => {
  res.send(data);
});

app.listen( config.port, function listenHander() {
  console.info( `Running on ${config.port}` );
});
