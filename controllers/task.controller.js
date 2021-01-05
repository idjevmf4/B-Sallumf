const TaskService = require('./../services/task.service');

const pleaseValidate = (field) => {

  return true;
}

const taskService = new TaskService;

class taskController {

  getTask = async (req, res) => {
    
    const response = await taskService.findAll();
    res.status(200).send(response);
  };

  getTaskById = async (req, res) => {

    const response = await taskService.findById(req.params.id)

    .then(() => res.status(200).send(
      res.status(200).send(response)
    ))

    .catch(err => res.status(404).send({
      message: `404 - Sorry, There is nothing Here`
    }));
  };

  createTask = async (req, res) => {

    const newTask = req.body;
    const isThisOk = pleaseValidate(newTask);

    if (isThisOk === true) {
      await taskService.create(newTask)

      .then(() => res.status(200).send({
        message: `${newTask.title} Added`
      }))
  
      .catch(error => res.status(400).send({ 
        message: error.errors.title.message 
      }));
    } else {
      res.status(406).send({
        message: isThisOk
      })
    }
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