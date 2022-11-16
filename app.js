var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const User = require('./models/user.model');


//User.sync() ;


var usersRouter = require('./routes/users');

var app = express();
const port = 3000

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/user', usersRouter);


app.get('/', (req, res) => {
    res.send('app is running!')
  })

  
  
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })
module.exports = app;






