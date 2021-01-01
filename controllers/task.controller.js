const TaskService = require('./../services/task.service');

const taskService = new TaskService;

class taskController {

  getTask = async (req, res) => {
    
    const response = await taskService.findAll();    

    res.status(200).send(response)

  };


  getTaskById = async (req, res) => {

    const response = await taskService.findById(req.params.id)

    .then(() => res.status(200).send(
      res.status(200).send(response)
    ))
    .catch(err => res.status(404).send(
        { message: `404 - Sorry, There is nothing Here` }
    ));

  };


  createTask = async (req, res) => {

    const newTask = req.body;

    await taskService.create(newTask)

    .then(() => res.status(200).send(
      { message: `${newTask.title} Added`}
    ))
    .catch(err => res.status(500).send(
        { message: `Something goes Wrong, please try again` }
    ));

  };


  editTask = async (req, res) => {

    const taskEdit = req.body;
    const taskId = req.params.id;

    await taskService.edit(taskId, taskEdit)

    .then(() => res.status(200).send(
      { message: `Task Edited`}
    ))
    .catch(err => res.status(500).send(
      { message: `Something goes wrong`}
    ));

  };


  deleteTask = async (req, res) => {

    const deleteTask = req.params.id;

    await taskService.delete(deleteTask)

    .then(() => res.status(200).send(
      { message: `Task Deleted`}
    ))
    .catch(err => res.status(500).send(
      { message: `Something goes wrong`}
    ));
    
  };


  ooops = (req, res) => {
    res.status(404).send({ message: `404 - Sorry, There is nothing Here` });
  };

};

module.exports = taskController;