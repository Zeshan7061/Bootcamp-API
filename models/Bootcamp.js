const mongoose = require('mongoose');
const { Schema } = mongoose;

const websiteRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const enums = [
	'Web Development',
	'Mobile Development',
	'UI/UX',
	'Data Science',
	'AI & Robotoics',
	'Business',
	'Other'
];

const BootcampSchema = new Schema({
	name: {
		type: String,
		required: [true, 'please add a name'],
		unique: true,
		trim: true,
		maxlength: [50, 'Name should be 50 characters long']
	},
	slug: String,
	description: {
		type: String,
		required: [true, 'please add a name'],
		maxlength: [500, 'Name should be 500 characters long']
	},
	website: {
		type: String,
		match: [websiteRegex, 'please use a valid URL with HTTP or HTTPS']
	},
	phone: {
		type: String,
		maxlength: [20, 'Phone number should be 20 digits long']
	},
	email: {
		type: String,
		match: [emailRegex, 'Please provide valid email address']
	},
	address: {
		type: String,
		required: [true, 'Please add an address']
	},
	location: {
		// Geo JSON point
		type: {
			type: String,
			enum: ['Point']
		},
		coordinates: {
			type: [Number],
			index: '2dsphere'
		},
		formattedAddress: String,
		City: String,
		State: String,
		zipcode: String,
		country: String
	},
	careers: {
		type: [String],
		required: true,
		enum: enums
	},
	averageRating: {
		type: Number,
		min: [1, 'Raintg must be at least 1'],
		min: [10, 'Raintg must be less then 10']
	},
	averageCost: Number,
	photo: {
		type: String,
		default: 'no-photo.jpg'
	},
	housing: {
		type: Boolean,
		default: false
	},
	jobAssistance: {
		type: Boolean,
		default: false
	},
	jobGuarantee: {
		type: Boolean,
		default: false
	},
	acceptGi: {
		type: Boolean,
		default: false
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
