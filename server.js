var express = require('express');

//create our app

var app = express();

app.use(express.static('public')); //exposing the folder public to the public
app.listen(3000, function() {
  console.log('Express server is up on port 3000');
}); // when the server is up, it will call the function which console log 
