var express = require('express');
const { login: { login, signUp,getAllUser } } = require('./../controllers');

var router = express.Router();

router.post('/login', login);
router.post('/signup', signUp);
router.get('/getalluser', getAllUser);

module.exports = router;
