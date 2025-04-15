require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userModels = require('./models/user.models')
const userController = require('./controllers/user.controller')



const app = express()
app.use(express.json())

const PORT = process.env.PORT || 8080

app.get('/', userController)

app.post('/', async (req, res) => {
    try {
        const {userName, phone} = req.body
        const newUser = await userModels.create({userName, phone})
        res.send(newUser)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

const startDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {}).then(() => console.log('connected to DB'))
        app.listen(PORT, () => console.log('POrt ishladi'))
    } catch (error) {
        console.log('serverga ulanishda xato' , error)
        
    }
}

startDB()