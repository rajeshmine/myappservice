
const { transationModel, bankModel } = require('./../models');

const list = (req, res) => {
  transationModel.find((err, result) => err ? new Error(err) : res.json({ message: result })).catch(err => res.status(400).json(err))
}

const sendMoney = (req, res) => {
  const temp = new transationModel(req.body);
  let query = { mobileNo: req.body.sender };
  console.log(query)
  bankModel.findOne(query).then(info => {
    if (!info || info.amount < req.body.amount)
      return res.json({ message: "Insufficient Amount" })
    temp.save().then(data => res.json({ message: "Transaction completed successfully" })).catch(err => res.status(400).json(err))
  }).catch(err => res.status(400).json(err))
}


module.exports = {
  list,
  sendMoney
};