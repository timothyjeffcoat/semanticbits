var router = require('express').Router();

//TODO: Move this into a database
var people = [
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

router.get('/', function(req, res) {
  res.json({
    people: people
  });
});

router.post('/', function(req, res) {
  var id = Math.random() * 100000;
  var data = Object.assign({}, req.body, {id: id});
  people.push(data);

  res.json({
    person: data
  });
});

router.get('/:id', function(req, res) {
  res.json({
    person: people.find(function(person) {
      return (person.id === req.params.id);
    })
  });
});

router.put('/:id', function(req, res) {
  var data = Object.assign({}, req.body);
  var index = people.findIndex(function(person) {
    return (person.id === req.params.id);
  });
  if (index === -1) {
    res.json({});
  } else {
    people.splice(index, 1, data);

    res.json({
      person: data
    });
  }
});

router.delete('/:id', function(req, res) {
  res.json({
    person: people.filter(function(person) {
      return (person.id !== req.params.id);
    })
  });
});

module.exports = router;
