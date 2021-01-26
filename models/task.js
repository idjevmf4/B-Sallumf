const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Enter At Least a Title!']
  },
  details: String,
  priority: String,
  done: String,
  deadline: Date,
  date: { type: Date, default: Date.now }
});

const TaskModel = mongoose.model('tasks', taskSchema);

module.exports = TaskModel;