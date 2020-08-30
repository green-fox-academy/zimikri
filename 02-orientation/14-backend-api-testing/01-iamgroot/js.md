# I am groot!

## init.sh

```shell
mkdir iamgroot && cd iamgroot
mkdir test && touch test/test-routes.js
npm init -f
npm install tape supertest --save-dev
npm install express --save
touch server.js routes.js
```

- `sh init.sh` from your workshop day folder

## iamgroot/server.js

```javascript
'use strict';

const routes = require('./routes');
const port = 3000;

routes.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
```

## iamgroot/routes.js

```javascript
const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
});

module.exports = app;
```

- It should receives a query parameter: `message=somemessage`
- And responds with a json object with a translated text like below:
  ```json
  {
    "received": "somemessage",
    "translated": "I am Groot!"
  }
  ```
- If no input is provided:
  ```json
  {
    "error": "I am Groot!"
  }
  ```
- Start the server with `node server.js`
- Test it manually with Postman

## iamgroot/test/routes.js

```javascript
'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');
​
test('groot endpoint', (t) => {
  // TODO: implement it
});
```

- Write a test where you check:
  - With giving a parameter the status is ok,
  - and the given response is the same as expected
  - Without giving a parameter the status is not ok,
  - and the given error response is the same as expected

## What happened

- We separated the REST routes from our server so we can test endpoints without
  running our server

[![](../assets/groot.jpg)](https://www.youtube.com/watch?v=HplYmXMo4Jc)
