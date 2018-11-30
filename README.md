// Start Server

node lib/server.js
or 
yarn dev

// check logs
yarn pm2 logs

// packages
ejs - for templating
pm2 - for zero downtime
react
react-dom
webpack
babel-loader@7
babel-polyfill
jest
react-test-renderer

// yarn scripts
yarn start
yarn stop
yarn restart
yarn webpack
time yarn webpack

// Tips
Get api endpoint data and store it locally:
  Linux:
$ wget -O lib/testData.json https://gist.githubusercontent.com/samerbuna/5b53056342720b79ab19fc75629a9c8f/raw/f80d3d219d5913e0b36af1fcbb79c8721666fd49/react-blog-mockup-data.json
  Mac:
$ curl https://gist.githubusercontent.com/samerbuna/5b53056342720b79ab19fc75629a9c8f/raw/f80d3d219d5913e0b36af1fcbb79c8721666fd49/react-blog-mockup-data.json -o lib/testData.json

Mapping an Array into an Object with Reduce:
  input -- Object.articles:
  {
    articles: [{id: 1, name: 'Guy'}, {id: 2, name: 'Dude'}]
  }

  function
  mapObjectIntoArray( arr ) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  Output:
  {
    1: {id:1,name:'Guy'},
    2: {id:2,name:'Dude'},
  }



undefined: test: 2__proto__: Object__proto__: Object
var arr = [{test: 1, id: 'a'}, {test: 2, id: 'b'}]

