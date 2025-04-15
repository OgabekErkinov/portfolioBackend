const express = require('express')
const projectController = require('../controllers/project.controller')

const router = express.Router()

router.get('/api/project', projectController.getAll)

router.post('/api/project', projectController.postProject)

router.put('/api/project/:id', projectController.updateProject)

router.delete('/api/project/:id', projectController.deleteProject)


module.exports = router