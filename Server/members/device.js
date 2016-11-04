
var mongoose = require('mongoose');
var DeviceSchema = new mongoose.Schema({
	name: 		{ type: String, required: true }
})
module.exports = mongoose.model('Device', DeviceSchema);