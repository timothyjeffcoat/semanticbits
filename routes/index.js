const router = require('express').Router();
const patients = require('./patients');

router.get('/', function(req, res) {
  res.json({
    message: 'Welcome to the API'
  });
});

router.use('/patients', patients);

module.exports = router;
