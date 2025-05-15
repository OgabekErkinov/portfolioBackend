const router = require('express').Router();
const questionController = require('../controllers/question.controller');

router.post('/question', questionController.create);
router.get('/question', questionController.getAll);
router.get('/question/:id', questionController.getById);
router.put('/question/:id', questionController.update);
router.delete('/question/:id', questionController.remove);

module.exports = router;
