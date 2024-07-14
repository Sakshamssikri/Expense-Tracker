const express = require('express')
const cors = require('cors');
const {readdirSync} = require('fs')
const app = express()
const {connetDB}=require('./db/db');


const PORT = 3000;

//middlewares
app.use(express.json())
app.use(cors())

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

app.listen(PORT, () => {
        console.log('listening to port:', PORT)
})

