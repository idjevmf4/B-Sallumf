const express = require('express');

const TaskController = require('../controllers/task.controller');

const taskController = new TaskController();

const router = express.Router();

router.get('/', taskController.getTask);

router.get('/:id', taskController.getTaskById);

router.post('/new', taskController.createTask);

router.put('/:id', taskController.editTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;