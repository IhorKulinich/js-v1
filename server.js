var cors = require('cors');
var express = require('express');
var app = express();

app.use(cors({ origin: 'https://trello.com' }));

var express = require('express');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("*", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.post("/auth", function (request, response){
    response.send({token: "3e73c2d7bfad6139cb61dde0745a7c28ff484bfb83620531b891ff649afb6495"});
})