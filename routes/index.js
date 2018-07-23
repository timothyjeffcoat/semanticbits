var router = require('express').Router();
var people = require('./people');

router.get('/', function(req, res) {
  res.json({
    message: 'Welcome to the API'
  });
});

router.use('/people', people);

module.exports = router;
