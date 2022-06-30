const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('Task Manager App')
})
app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI)
        app.listen(process.env.PORT, console.log(`server is listening on port ${process.env.PORT}...`))
    } catch (error) {
        console.log('err', error)
    }
}

start()

