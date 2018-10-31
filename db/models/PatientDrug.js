const db = require('../sequelize');

const PatientDrug = db.sequelize.define('patient_drug', {
  patientId: {
    type: db.Sequelize.INTEGER
  },
  drugId: {
    type: db.Sequelize.INTEGER
  }
}, { timestamps: false });

module.exports = PatientDrug;