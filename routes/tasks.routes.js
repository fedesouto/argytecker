const { Router } = require('express');
const tasksController = require('../controllers/tasks.controller');

const router = Router();

router.get('/', tasksController.getAll)

router.get('/:id', tasksController.getById)

router.post('/', tasksController.addNew)

router.post('/:id', tasksController.markAsDone)

router.put('/:id', tasksController.updateTask)

router.delete('/:id', tasksController.deleteById)

module.exports = router;