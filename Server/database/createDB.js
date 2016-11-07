// Load mongoose package
var mongoose = require('mongoose');
var mongoURL = '127.0.0.1:27017';

/* ----------------- */
/* CREATING DATABASE */
/* ----------------- */

// Connect to MongoDB and create a database called CleanIT
mongoose.connect('mongodb://' + mongoURL + '/CleanIT');

// Create a schema
var UserSchema = new mongoose.Schema({
	name: 		{ type: String, required: true },
	login: 		{ type: String, required: true},
	password: 	{ type: String, required: true }
});

var DeviceSchema = new mongoose.Schema({ name: { type: String, required: true } });

// Create a model based on the schema
var User = mongoose.model('User', UserSchema);
var Device = mongoose.model('Device', DeviceSchema);

// Clean previous inserted items
User.remove({}, function(err) { console.log("-- User collection cleared."); });
Device.remove({}, function(err) { console.log("-- Device collection cleared."); });

/* --------------- */
/* ADDING RAW DATA */
/* --------------- */

// Create and save users
var operations = 0;
createUser("Jean-Christophe", "jc.ricard@axible.io", "jrd_at14");
createUser("Adrien", "adrien.dosreis@axible.io", "ads_at14");

// Create and save devices
createDevice("Sens'it");
createDevice("Axibox");
createDevice("Novapass");
createDevice("DeltaWifi");
createDevice("Extelsmart");
createDevice("QUB");

var totalOperations = 8

// Wait for all entries to get saved
var intvl = setInterval(function() {
    if (operations >= totalOperations) { 
		console.log("Ending script after " + operations + " data being inserted.");
		process.exit();
    }
}, 100);

/* -------------------------- */
/* CONVENIENCE INSERT METHODS */
/* -------------------------- */
function createUser(name, login, password) {
	User.create({name:name, login:login, password:password}, function(err, user) {
		if (err)
			console.log(err);
		else
			console.log("-- User " + name + " inserted.");

		operations++;
	});
}

function createDevice(name) {
	Device.create({name:name}, function(err, device) {
		if (err)
			console.log(err);
		else
			console.log("-- Device " + name + " inserted.");

		operations++;
	});
}