const TaskModel = require('./../models/task');

class TaskService {

  findAll = async () => await TaskModel.find();

  findById = async () => await TaskModel.findById(id);

  create = async (newTask) => await TaskModel.create(newTask);

  edit = async (id, taskEdit) => await TaskModel.findByIdAndUpdate(id, taskEdit);

  delete = async (id) => await TaskModel.findByIdAndDelete(id);
};

module.exports = TaskService;