var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Boom = require('boom')


var teamsRouter = require('./routes/teams');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/v1/teams', teamsRouter);

// Catch undefined routes
app.use((req, res, next) =>{
  const err = Boom.notFound(`sorry cant found the path ${req.path}`)

  next(err)
});

// Generic error handler
app.use((req, res, next) =>{
  let status, message;
  if(err.output){
    status = err.output.statusCode;
    message = err.output.payload;
  }else {
    status =err.status || 500;
    message = {
      message: err.message || 'Oops, something bad happened'
    }
  }
    res.status(status)
      .join(message)

})

module.exports = app;
