const tasksService = require("../services/tasks.service");

const tasksController = {};

tasksController.getAll = async (req, res, next) => {
  res.json(await tasksService.getAll());
};

tasksController.getById = async (req, res, next) => {
  const id = req.params.id;
  res.send(await tasksService.getById(id));
};

tasksController.addNew = async (req, res, next) => {
  const task = req.body;
  res.send(await tasksService.create(task));
};

tasksController.updateTask = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  res.send(await tasksService.updateTask(id, data));
};

tasksController.deleteById = async (req, res, next) => {
  const id = req.params.id;
  res.send(await tasksService.deleteTask(id));
};

tasksController.markAsDone = async (req, res, next) => {
  const id = req.params.id;
  await tasksService.markAsDone(id);
  res.redirect('/')
}

module.exports = tasksController;
