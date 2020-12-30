const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  details: { type: String },
  priority: { type: String },
  taskStatus: { type: String },
  deadline: { type: Date }
});

const TaskModel = mongoose.model('tasks', taskSchema);

module.exports = TaskModel;