
var mongoose = require('mongoose');
var GameSchema = new mongoose.Schema({
	name: 		{ type: String, required: true }
})
module.exports = mongoose.model('Game', GameSchema);