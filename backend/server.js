const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const recipes = require('./routes/api/recipes');

const app = express();
require('dotenv').load();

app.use(bodyParser.json(), cors());

const PORT = process.env.DB_PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'nenacteno';

console.log('URI: ', MONGODB_URI);

mongoose
  .connect(
    MONGODB_URI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Mongodb connected!');
  })
  .catch(err => {
    console.log(err);
  });

// * Use routes
app.use('/api/recipes', recipes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
