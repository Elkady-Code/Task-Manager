const Task = require("../models/taskModel");
const asyncWrapper = require("../middleware/async");
const { createCustomError, customError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res
    .status(200)
    .json({ status: "success", data: { tasks, nbHits: tasks.length } });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ status: "success", data: { task } });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with the id: ${taskID}`, 404))
  }
  res.status(200).json({ status: "success", data: { task } });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with the id: ${taskID}`, 404))
  }
  res.status(200).json({ status: "success", data: { task } });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with the id: ${taskID}`, 404))
  }
  res.status(200).json({ status: "success", data: { task } });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
