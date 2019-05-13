var express = require('express');
const { history, loadmoney, sendmoney } = require('./../controllers');

var router = express.Router();

router.post('/history', history);
router.post('/loadmoney', loadmoney);
router.post('/sendmoney', sendmoney);

module.exports = router;
