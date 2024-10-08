const mongoose = require('mongoose');
const colors = require('colors');
const config = require('../config/index');

const connectDatabase = async () => {
	// DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false`
	mongoose.set('strictQuery', true);

	const conn = await mongoose.connect(config.DB.MONGO_URI);

	console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDatabase;
