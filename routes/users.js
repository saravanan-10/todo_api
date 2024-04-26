const express = require('express');
const {createUser, usersList, login} = require('../controller/users');

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const router = express.Router();

router.post('/register', upload.single('upload_file'), createUser);
router.get('/userslist', usersList);
router.post('/login', login);

module.exports = router;

