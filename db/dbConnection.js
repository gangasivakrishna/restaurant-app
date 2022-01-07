const mongoose = require('mongoose');
const debug = require('debug')('app');
const dbUrl = process.env.DB_URL;
const dbConnection = () => {
        debug("Database connection initialized");
        mongoose.connect(dbUrl)
		.then(() =>{
          debug('Connected to MongoDb...')
        })
        .catch(err => {
			debug('Failed to connect to Mongo %s', err);
		})
}

module.exports = dbConnection;