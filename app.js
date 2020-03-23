const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//import controllers
const payments = require('./controllers/payments');
const tickets = require('./controllers/tickets');
const index = require('./controllers/index');

//initialize models
const Ticket = require('./models/tickets');
const Parking = require('./models/parkings');
const models = { Ticket, Parking };

const rates = require('./utils/ratesLoader')();

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/payments', payments({ models: models, rates: rates }));
app.use('/tickets', tickets({ models: models, rates: rates }));
app.use('/', index());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
