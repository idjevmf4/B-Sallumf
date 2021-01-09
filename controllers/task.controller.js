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

    // const request = await taskService.findById(req.params.id);

    // const response = await request.json(errado)

    // .then(() => {
    //   console.log(response)
    //   console.log(`AGORA DEU CERTO`)
      
    //   res.status(200).send(
    //     response
    //   )
    // })

    // .catch(err => {
    //   console.log(err)
    //   console.log(`Something goes wrong`)
    //   res.status(400).send(
    //     { message: `Something goes wrong`}
    //   )
    // });

    try {
      const request = await taskService.findById(req.params.id);
      res.status(200).send(request);
    } 
    catch (error) {
      console.log(error);
      res.status(404).send({ 
        message: 'id n encontrado' 
      })
    }
    
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