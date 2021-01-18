const TaskService = require('./../services/task.service');

const pleaseValidate = (field) => {

  if (!field.title) {
    return 'Please enter a Title for the Task!'
  }

  if (!field.priority) {
    return 'Please enter a Priority for the Task: Low, Normal or High'
  }

  return true;
}

const taskService = new TaskService;

class taskController {

  getTask = async (req, res) => {

    try {
      const response = await taskService.findAll();
      res.status(200).send(response);
    } 
    catch (error) {
      console.log(error.message);
      res.status(404).send({ 
        message: "We can't reach the Fountain of Tasks, please try again in a few moments!" 
      })
    }    

  };

  getTaskById = async (req, res) => {

    try {
      const request = await taskService.findById(req.params.id);
      res.status(200).send(request);
    } 
    catch (error) {
      console.log(error.message);
      res.status(404).send({ 
        message: 'ID not found' 
      })
    }
    
  };

  createTask = async (req, res) => {

    var newTask = req.body;
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

    const isThisOk = pleaseValidate(taskEdit);

    if (isThisOk === true) {

      await taskService.edit(taskId, taskEdit)
    
      .then(() => res.status(200).send(
        { message: `Task Edited`}
      ))
  
      .catch(err => res.status(500).send(
        { message: `Something goes wrong`}
      ));

    } else {

      res.status(406).send({
        message: isThisOk
      })
    }

  };


  deleteTask = async (req, res) => {

    await taskService.delete(req.params.id)

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