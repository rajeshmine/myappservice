var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const { dbURL } = require('./config/config.json')

var usersRouter = require('./routes/users');
var bankRouter = require('./routes/bank');
var transRouter = require('./routes/transation');


mongoose.Promise = global.Promise;
mongoose.connect(dbURL, { useNewUrlParser: true });

var app = express();

app.use(function (err, req, res, next) {
  if (err) return res.status(400).json(err);
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use('/users', usersRouter);
app.use('/bank', bankRouter);
app.use('/transation', transRouter);

module.exports = app;
