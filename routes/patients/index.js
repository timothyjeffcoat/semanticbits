const router = require('express').Router();
const { Patient, Drug, PatientDrug, sequelize } = require('../../db');

let patients = [
  {
    id: 1,
    first_name: 'John',
    last_name: 'Doe'
  },
  {
    id: 2,
    first_name: 'Jane',
    last_name: 'Doe'
  }
];

router.get('/', async (req, res) => {
  const data = await Patient.findAll({
    include: [{
      model: Drug,
      as: 'drugs',
      through: {
        model: PatientDrug,
        attributes: [],
      }
    }]
  });

  // const data = await sequelize.query('select * from patients');

  res.json({
    patients: data
  });
});

router.post('/', function(req, res) {
  const id = Math.random() * 100000;
  const data = Object.assign({}, req.body, {id: id});
  patients.push(data);

  res.json({
    patient: data
  });
});

router.get('/:id', function(req, res) {
  res.json({
    person: patients.find(function(patient) {
      return (patient.id === req.params.id);
    })
  });
});

router.put('/:id', function(req, res) {
  const data = Object.assign({}, req.body);
  const index = patients.findIndex(function(patient) {
    return (patient.id === req.params.id);
  });

  if (index === -1) {
    res.json({});
  } else {
    patients.splice(index, 1, data);

    res.json({
      patient: data
    });
  }
});

router.delete('/:id', function(req, res) {
  res.json({
    patient: patients.filter(function(patient) {
      return (patient.id !== req.params.id);
    })
  });
});

module.exports = router;
