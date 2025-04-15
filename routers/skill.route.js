const express = require('express')
const skillController = require('../controllers/skill.controller')

const router = express.Router()


router.get('/api/skill', skillController.getSkills)

router.post('/api/skill', skillController.postSkill)

router.put('/api/skill/:id', skillController.updateSkill)

router.delete('/api/skill/:id', skillController.deleteSkill)


module.exports = router