const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const apiRouters = require('./apiRouters');

const app = express();
//Set security HTTP headers
app.use(morgan('dev'));
app.use(helmet());
//Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP,please try again in an hour!',
});
app.use('/api', limiter);
//Body parser ,reading data from body into req.body
app.use(express.json({ limit: '10kb' })); //middleware 中间件

// //Data sanitization against NoSQL query injection
// app.use(mongoSanitize());
//Data sanitization against XSS
app.use(xss());
//to prevent parameter pollution
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  next();
});
app.use('/api/v1', apiRouters);

module.exports = app;
