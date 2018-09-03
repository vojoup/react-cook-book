const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const recipes = require('./routes/api/recipes');

const app = express();
require('dotenv').load();

app.use(bodyParser.json(), cors());

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'No URI provided!';

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

// * Serve static assests if in prod mode
if (process.env.NODE_ENV === 'production') {
  // * Set static folder
  app.use(express.static('../build'));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
