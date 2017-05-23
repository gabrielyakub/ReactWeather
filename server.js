var express = require('express');

// Create app
var app = express();

// app.use() add functionality to express application
// express.static -> specify folder name to be exposed to the web server
app.use(express.static('public'));

// start the server, app.listen(port, function(){});
app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});
