const express = require('express');

const TaskController = require('../controllers/task.controller');

const taskController = new TaskController();

const router = express.Router();


router.get('/tasks', taskController.getTask);

router.get('/task/:id', taskController.getTaskById);

router.post('/new', taskController.createTask);

router.put('/edit/:id', taskController.editTask);

router.delete('/delete/:id', taskController.deleteTask);

router.get('*', taskController.ooops);


module.exports = router;