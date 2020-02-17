module.exports = {
	getBootcamps: (req, res, next) => {
		res.send('show all bootcamps');
	},

	getBootcamp: (req, res, next) => {
		res.send('specific bootcamp');
	},

	createBootcamp: (req, res, next) => {
		res.send('create bootcamp');
	},

	updateBootcamp: (req, res, next) => {
		res.send('update bootcamp');
	},

	deleteBootcamp: (req, res, next) => {
		res.send('delete route');
	}
};
