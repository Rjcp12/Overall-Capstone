const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const HttpError = require('./models/http-error');

const ownerroutes = require('./routes/Owner-routes');
const userSignuproutes = require('./routes/users-signup-routes');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use('/api/owner',ownerroutes);
app.use('/api/userauth',userSignuproutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({message: error.message || 'An unknown error occurred!'});
});


mongoose.connect(
  'mongodb+srv://robertjcp12:robert12@nodejstomongodb.gmqooye.mongodb.net/capstone'
).then(() => {
  app.listen(5000);
}).catch((err) => {
  console.log(err);
});