var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Database
var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('localhost:27017/mongoose-practice');

// MONGOOSE
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose-practice');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  // Reference Schema with one property of Name
  var kittySchema = mongoose.Schema({
    name: String
  });

  kittySchema.methods.speak = function() {
    var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
    console.log(greeting);
  }

  // Compile schema into a model
  //Each document created with the model will be a kitten with properties and behaviors declared in Schema
  var Kitten = mongoose.model('Kitten', kittySchema);

  //Create an instance of a kitten named Silence
  var silence = new Kitten({ name: 'Silence' });
  console.log(silence.name);
  silence.speak();

  var fluffy = new Kitten({ name: 'Fluffy' });
  fluffy.speak();

  Kitten.find(function(err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  })

});

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
