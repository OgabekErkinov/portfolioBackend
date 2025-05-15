const express = require("express");
const userController = require("../controllers/user.controller");


const router = express.Router()

router.get('/user', userController.getAll)
router.post('/user/update-rating', userController.updateRating);


module.exports = router