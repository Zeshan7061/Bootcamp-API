const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const app = express();

// load env vars
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 3000;

// database connection
connectDB();

// routes
const bootcamps = require('./routes/bootcamps');

// Dev logging middleware
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Mount routes
app.use('/api/v1/bootcamps', bootcamps);

// port listing our application
const server = app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port:${PORT}`.black
			.bgWhite.bold
	)
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`.red);
	//exit application
	server.close(() => process.exit(1));
});
