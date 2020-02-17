const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const app = express();
const morgan = require('morgan');

// routes
const bootcamps = require('./routes/bootcamps');

// load env vars
dotenv.config({ path: './config/config.env' });
const PORT = process.env.PORT || 3000;

// Dev logging middleware
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Mount routes
app.use('/api/v1/bootcamps', bootcamps);

// port listing our application
app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port:${PORT}`.black
			.bgWhite.bold
	)
);
