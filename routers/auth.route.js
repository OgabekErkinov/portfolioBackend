const express = require("express");
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");


const router = express.Router()


router.post('/register', authController.register)
router.post('/activation/:link', authController.activation)
router.post('/login', authController.login)
router.post('/logout', authController.logout)

module.exports = router