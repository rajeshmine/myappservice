var express = require('express');
const { transation: { list, sendMoney } } = require('./../controllers');

var router = express.Router();

router.get('/list', list);
router.post('/send', sendMoney);

module.exports = router;
