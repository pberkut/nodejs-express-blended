const express = require('express');

const app = express();

app.get('/test', (req, res, next) => {
  res.send('Hello World!');
});

app.get('/contacts/1', (req, res, next) => {
  res.json({ name: 'Petro', age: 30 });
});

module.exports = app;
