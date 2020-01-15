####The first test is to 

Get an array of all people in the Marvel organization, with no duplicate last names,
sorted by id, and add a name field that is a combination of firstName + lastName

```javascript
const data = [{
    id: 3,
    firstName: 'Tony',
    lastName: 'Stark',
  	organization: 'Marvel'
  },
  {
    id: 1,
    firstName: 'Bruce',
    lastName: 'Banner',
    organization: 'Marvel'
  },
  {
    id: 2,
    firstName: 'Bruce',
    lastName: 'Wayne',
    organization: 'DC'
  },
  {
    id: 5,
    firstName: 'Clark',
    lastName: 'Kent',
    organization: 'DC'
  },
  {
    id: 4,
    firstName: 'John',
    lastName: 'Stark',
    organization: 'Marvel'
}];

```

####The second test 

Is to determine the values of the variables i and name.
Put a comment with the value next to each line that has a console.log

```javascript
'use strict';

const i = 44;

(function() {
  
  var i = 22;
  var name = undefined;
  var self = this;
  
  function a() {
    console.log('#1 =>', i);
    for (let i = 0; i < 5; i++) {
      console.log('#2 =>', i);
    }
    console.log('#3 =>', i);
  }

  function b() {
    var i;
    console.log('#4 =>', i);
    
    for (var i = 0; i < 5; i++) { 
      console.log('#5 =>', i);
    }    
    console.log('#6 =>', i);
    
    if (name ==='marcus') {
       var j = 55;
       var salary = "100K";
    }
    console.log('#j =>', j);
  }
  console.log('#7 =>', i);

  name = 'marcus';
  
  a();
  b();
  
})();

console.log('#8 =>', i);
```
### Third test

Given the index.js file below that is an Node.js/Express.js code snippet do the following:

1. 
```javascript
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
  // const data = await Patient.findAll({
  //   include: [{
  //     model: Drug,
  //     as: 'drugs',
  //     through: {
  //       model: PatientDrug,
  //       attributes: [],
  //     }
  //   }],
  //   limit: 25
  // });

  // const data = await sequelize.query('select * from patients');

  res.json({
    patients
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

```
