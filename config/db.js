const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
	const conn = await mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	});

	console.log(`MongoDB connected: ${conn.connection.host}`.green.underline);
};

module.exports = connectDB;
