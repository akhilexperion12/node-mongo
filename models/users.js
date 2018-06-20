const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
	name: {
		type: String,
		set: s => s.toLowerCase(),
		alias: 'i'
	}
	});


var Users = mongoose.model('User', UserSchema);
module.exports = { Users };