const db = require('../sequelize');
const Drug = require('./Drug');

const Patient = db.sequelize.define('patient', {
  firstName: {
    type: db.Sequelize.STRING
  },
  lastName: {
    type: db.Sequelize.STRING
  },
  age: {
    type: db.Sequelize.INTEGER
  }
});

Patient.belongsToMany(Drug, { through: 'patient_drugs', as: 'drugs' });

module.exports = Patient;