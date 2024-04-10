const express = require('express');
const DB = require('./config/DB');
const todoRouter = require('./routes/todo')
const cors = require('cors')
const app = express();

const PORT = 5000;
DB();

app.use(cors())
app.use(express.json())
app.use('/todo', todoRouter)

app.listen(PORT,()=>{  
    console.log(`Server running at ${PORT}`);
})