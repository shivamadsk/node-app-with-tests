const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

server.setMaxListeners(0);

app.get('/', (req, res) => { 
  res.send('Hello World!!!'); 
});

const customListener = () => {
  console.log('Custom Event');
};

server.on('customEvent',customListener);
server.emit('customEvent');
server.off('customEvent',customListener);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = server;
