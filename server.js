const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const coffeeRoutes = require('./api/routes/coffeeRoutes');

coffeeRoutes(app);

const server = app.listen(config.get('PORT'), () => {
  const { port } = server.address();
  console.log(`5-2 Unlimited RESTful API server started on: ${port}`);
});
