const debug = require('debug')('app');
require('dotenv').config();
const express = require('express');
const db = require('./db/dbConnection');
db();
const routes = require('./routes');

const app = express();

const { PORT } = process.env;
/**
 * Parse incoming request bodies in a middleware before your handlers,
 * available under the req.body property
 */
app.use(express.json());

// Connect all our routes to  our application
app.use('/api', routes);

app.listen(PORT, () => {
  debug('listening on port %s', PORT);
});
module.exports = app;
