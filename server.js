const express = require('express');
const dotenv = require('dotenv');
const DB = require('./config/DB');
const todoRouter = require('./routes/todo');
const usersRouter = require('./routes/users');
const cors = require('cors');
const app = express();

// Set up Global configuration access
dotenv.config();

//const PORT = 5000;
const PORT = process.env.PORT;
DB();

app.use(cors())
app.use(express.json())
app.use('/todo', todoRouter)
app.use('/auth', usersRouter)

app.listen(PORT,()=>{  
    console.log(`Server running at ${PORT}`);
})