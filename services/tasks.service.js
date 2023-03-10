const TaskModel = require("../models/Task");
const tasksService = {};

tasksService.getAll = async () => {
  try {
    const tasks = await TaskModel.find();
    return tasks;
  } catch (error) {
    throw error;
  }
};

tasksService.getById = async (id) => {
  try {
    const task = await TaskModel.findById(id);
    return task;
  } catch (error) {
    throw error;
  }
};

tasksService.create = async (taskDto) => {
  try {
    const createdTask = await TaskModel.create(taskDto);
    return createdTask._id;
  } catch (error) {
    throw error;
  }
};

tasksService.updateTask = async (id, taskDto) => {
  try {
    const updatedTask = await TaskModel.updateOne({ _id: id }, taskDto);
    return updatedTask;
  } catch (error) {
    throw error;
  }
};

tasksService.deleteTask = async (id) => {
  try {
    const deletedTask = await TaskModel.deleteOne({ _id: id });
    return deletedTask;
  } catch (error) {
    throw error;
  }
};

tasksService.markAsDone = async (id) => {
  try {
    const updatedTask = await TaskModel.updateOne({_id: id}, {done: true})
    return updatedTask
  } catch (error) {
    throw error;
  }
}
module.exports = tasksService;
