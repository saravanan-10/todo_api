const express = require('express');
const { getTodo, createTodo, editTodo, deleteTodo, getTodoById } = require('../controller/todo');


const router = express.Router();



router.get('/list', getTodo);
router.get('/list/:id', getTodoById);
router.post('/create', createTodo);
router.put('/edit/:id', editTodo);
router.delete('/delete/:id', deleteTodo);

module.exports = router;
