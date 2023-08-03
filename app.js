const express = require('express');
const app = express();

const got = require('got');
got.emitter.setMaxListeners(20);

app.get('/', (req, res) => { 
  res.send('Hello World!!!'); 
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
