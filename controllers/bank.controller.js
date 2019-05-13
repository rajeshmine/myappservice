const { bankModel } = require('./../models');


const loadMoney = (req, res) => {

  const _OPTIONS = { upsert: true, new: false, overwrite: false, setDefaultsOnInsert: true }
  let query = { mobileNo: req.body.mobileNo };
  bankModel.findOneAndUpdate(query, req.body, _OPTIONS, (err, info) => err ? new Error(err) : res.json({ message: "Money Loaded Successfully" })).catch(err => res.status(400).json(err));
}

const getAmountDetails = (req, res) => {
  console.log(req.body)
  bankModel.findOne(req.body,{})
    .then(item => res.json({ response: item }))
    .catch(err => res.status(400).json(err))   
}



module.exports = {
  loadMoney,
  getAmountDetails
};
