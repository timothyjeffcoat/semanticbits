const db = require('../sequelize');
// const Patient = require('./Patient');

const Drug = db.sequelize.define('drug', {
  name: {
    type: db.Sequelize.STRING
  },
  details: {
    type: db.Sequelize.STRING
  }
});

module.exports = Drug;