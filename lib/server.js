import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public')); // express.static is middleware to explose publicdir
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {w : 'World'});
});

app.listen(config.port, function listenHander() {
  console.info(`Running on ${config.port}`);
});
