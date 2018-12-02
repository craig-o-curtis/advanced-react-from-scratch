// Starting the project
In Terminal 1:
```bash
$ yarn
$ yarn start
$ yarn logs
```
In Terminal 2:
```bash
$ yarn webpack
```
In Terminal 3:
```bash
$ yarn test
```

// Start Server
```bash
node lib/server.js
```
or 
```bash
yarn dev
```

// check logs
```bash
$ yarn pm2 logs
```

// npm packages
* ejs - for templating
* pm2 - for zero downtime
* react
* react-dom
* webpack
* babel-loader@7
* babel-polyfill
* jest
* react-test-renderer
* axios

// yarn scripts
```bash
$ yarn start
$ yarn stop
$ yarn restart
$ yarn webpack
$ time yarn webpack
```

// Tips
Get api endpoint data and store it locally:
  Linux:
```bash
$ wget -O lib/testData.json https://gist.githubusercontent.com/samerbuna/5b53056342720b79ab19fc75629a9c8f/raw/f80d3d219d5913e0b36af1fcbb79c8721666fd49/react-blog-mockup-data.json
```
  Mac:
```bash
$ curl https://gist.githubusercontent.com/samerbuna/5b53056342720b79ab19fc75629a9c8f/raw/f80d3d219d5913e0b36af1fcbb79c8721666fd49/react-blog-mockup-data.json -o lib/testData.json
```

Mapping an Array into an Object with Reduce:
```js
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
```

// Git tips
Abbreviated Git history:
```bash
$ git log --decorate --abbrev-commit
```

Find where a file was used:
```bash
$ git grep serverRender
```

// Node / npm tips:
Easy relative paths 
-- package.json:
```json
{
  "scripts": {
    "start" "NODE_PATH=./lib..."
  }
}
```

