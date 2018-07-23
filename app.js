var path = require('path');
var http = require('http');

var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes');

var app = express();
app.set('port', 9000);
app.set('json spaces', 4);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

if (process.env.NODE_ENV === 'dev') {
  app.use(function (req, res, next) {
    res.set('Cache-Control', 'no-cache');
    next();
  });
}

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization,X-Requested-With');

// intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));
app.use(routes);

var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
