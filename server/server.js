const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Rick Ross',
    jobTitle: 'Boss'
  }, {
    name: 'Donny Hathaway',
    jobTitle: 'Funkmaster'
  }, {
    name: 'ESG',
    jobTitle: 'Straight up G'
  }]);
});

// GET /users
// Give users a name prop and position prop


app.listen(3137);
module.exports.app = app;
