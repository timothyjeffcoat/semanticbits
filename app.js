const path = require('path');
const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const db = require('./db/sequelize');

const app = express();
app.set('port', 9000);
app.set('json spaces', 4);

const routes = require('./routes');

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

const server = http.createServer(app);
server.listen(app.get('port'), async () => {
  console.log('Express server listening on port ' + server.address().port);

  // initialize the sqlite db
  try {
    await db.init();
  } catch (error) {
    console.log(error.message, error);
    process.exit(1);
  }
});
