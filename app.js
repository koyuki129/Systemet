let express = require('express');

// Let's create a new web server called app
let app = express();

// Tell our web server to serve files from a 
// certain folder
app.use(express.static('www'));

// Start the web server at a certain port
app.listen(3000, function(){
  console.log('The server is listening at port 3000');
});