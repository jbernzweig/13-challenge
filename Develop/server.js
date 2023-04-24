const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('sequelize');

// dotenv notation
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
