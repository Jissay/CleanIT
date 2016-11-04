/*
	See 
	http://book.mixu.net/node/ch6.html
	http://timjrobinson.com/how-to-structure-your-nodejs-models-2/
 */

var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: 		{ type: String, required: true },
	login: 		{ type: String, required: true},
	password: 	{ type: String, required: true }
});
module.exports = mongoose.model('User', UserSchema);

// var schemas = require("./schemas.js");

// function User() {
// 	this.id = -1;
// 	this.name = "";
// 	this.login = "";
// 	this.password = "";
// }

// User.prototype.isLogged(password) = function(password) {
// 	return password == this.password;
// }

// module.exports = User;