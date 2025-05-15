require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const userModels = require('./models/user.model')
const cookieParser = require('cookie-parser')

const app = express()
app.use(express.json())
app.use(fileUpload())
app.use(cookieParser())

app.use('/api/auth', require('./routers/auth.route'))
app.use('/api', require('./routers/user.route'))

const PORT = process.env.PORT || 8080

const startDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {})
        console.log('connected to DB')
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch (error) {
        console.log('Error connecting to the server', error)
    }
}

startDB()
