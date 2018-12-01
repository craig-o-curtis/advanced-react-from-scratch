import express from 'express';
import config from './config';
import serverRender from './renderers/server';

const app = express();

app.use( express.static( 'public' ) ); // express.static is middleware to explose publicdir
app.set( 'view engine', 'ejs' );

app.get('/', (req, res) => {
  const initialContent = serverRender();
  res.render('index', { initialContent } );
});

app.listen( config.port, function listenHander() {
  console.info( `Running on ${config.port}` );
});
