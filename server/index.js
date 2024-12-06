require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
const db_models = require('./db_models/db_models.js')
const PORT = process.env.PORT
const cors = require('cors')
const router = require('./routes/indexRouter.js')
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js')

// Файл запуска сервера

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/', router)
app.use(errorHandler)

app.get('/', async (req, res) => {
    res.status(200).json({message: 'Server is running'})
});

const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started. PORT ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()