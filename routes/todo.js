const express = require('express');
const { getTodo, createTodo, editTodo, deleteTodo, getTodoById } = require('../controller/todo');
const auth = require('../middleware/auth');


const router = express.Router();



router.get('/list', auth, getTodo);
router.get('/list/:id', getTodoById);
router.post('/create', createTodo);
router.put('/edit/:id', editTodo);
router.delete('/delete/:id', deleteTodo);

module.exports = router;
