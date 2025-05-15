const express = require("express");
const bookController = require("../controllers/book.controller");


const router = express.Router()

router.get('/book', bookController.getAll)
router.post('/book', bookController.addToMyBooks);
router.get('/book:id', bookController.getOne)


module.exports = router