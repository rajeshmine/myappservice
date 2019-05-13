var express = require('express');
const { bank: { loadMoney,getAmountDetails } } = require('./../controllers');

var router = express.Router();

router.post('/loadmoney', loadMoney);
router.post('/getAmountDetails', getAmountDetails);

module.exports = router;
