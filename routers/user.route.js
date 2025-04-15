const express = require("express");
const userController = require("../controllers/user.controller");


const router = express.Router()

router.get('/api/user', userController.getAll)

module.exports = router