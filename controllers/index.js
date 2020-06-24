const db = require('./../config/mongo');


module.exports = {

	read: (req, res) => {
		console.log('made it to read')

		db.post.find({}, (err, mongoRes) => {
			if (err) { console.error(err) }
			res.send(mongoRes)
		});
	}

};
