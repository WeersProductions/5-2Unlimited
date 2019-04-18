const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer);
const config = require('./config');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const coffeeRoutes = require('./api/routes/coffeeRoutes');

coffeeRoutes(app);

const server = httpServer.listen(config.get('PORT'), () => {
  const { port } = server.address();
  console.log(`5-2 Unlimited RESTful API server started on: ${port}`);
});

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
  socket.on('event', (data) => {
    console.log(data);
  });
});
