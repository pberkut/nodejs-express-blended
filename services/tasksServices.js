const fs = require('fs/promises');
const path = require('path');

const tasksPath = path.join(__dirname, '..', 'db', 'tasks.json');
// const tasksPath = path.join(process.cwd(), 'db', 'tasks.json');

const getTasksService = async () => {
  const response = await fs.readFile(tasksPath);
  return JSON.parse(response);
};

module.exports = { getTasksService };
