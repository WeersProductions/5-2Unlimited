const express = require('express');
const config = require('./config');

const app = express();

const server = app.listen(config.get('PORT'), () => {
  const { port } = server.address();
  console.log(`audio RESTful API server started on: ${port}`);
});
