const express = require('express');

const { getTasksService } = require('./services/tasksServices');

const app = express();

// app.get(
//   '/test',
//   (req, res, next) => {
//     console.log('Hello from middle');
//     next();
//   },
//   (req, res, next) => {
//     res.send('Hello World!');
//   },
// );

app.get('/tasks', async (req, res, next) => {
  const tasks = await getTasksService();
  res.status(200).json(tasks);
});

app.get('/tasks/:id', async (req, res, next) => {
  const tasks = await getTasksService();
  const id = req.params.id;
  console.log(req.params);
  const task = tasks.find(tasks.id === id);

  res.status(200).json(task);
});

module.exports = app;
