const jwt = require('jsonwebtoken')
const { secret } = require('./../config/config.json');
const { userModel } = require('./../models');
const login = (req, res) => {
  userModel.findOne(req.body, {})
    .then(data => {
      if (data) return jwt.sign({ data: data }, secret, function (err, token) {
        if (err) throw err;
        res.json({ data, token })
      })
      res.status(400).json("Check Credentials");
    })
    .catch(err => res.status(400).json(err || "Check Credentials"))
}

const signUp = (req, res) => {
  const user = new userModel(req.body)
  user.save()
    .then(item => res.json({ message: "SignUp successfully" }))
    .catch(err => res.status(400).json(err))
}

const getAllUser = (req, res) => {
  userModel.find()
    .then(item => res.json({ response: item }))
    .catch(err => res.status(400).json(err))   
}


module.exports = {
  login,
  signUp,
  getAllUser
};