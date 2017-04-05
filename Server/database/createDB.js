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

var GameSchema = new mongoose.Schema({ name: { type: String, required: true } });

// Create a model based on the schema
var operations = 0;
var User = mongoose.model('User', UserSchema);
var Game = mongoose.model('Game', GameSchema);

// Clean previous inserted items
console.log("*** CLEARING PREVIOUS DATABASE ***");
User.remove({}, function(err) { 
	console.log("-- User collection cleared."); 
	
	Game.remove({}, function(err) { 
		console.log("-- Game collection cleared."); 
	
		console.log("*** CREATING NEW DATABASE ***");

		/* --------------- */
		/* ADDING RAW DATA */
		/* --------------- */

		// Create and save users
		createUser("Jean-Christophe", "jc.ricard@axible.io", "jrd_at14");
		createUser("Adrien", "adrien.dosreis@axible.io", "ads_at14");

		// Create and save Games
		createGame("Sens'it");
		createGame("Axibox");
		createGame("Novapass");
		createGame("DeltaWifi");
		createGame("Extelsmart");
		createGame("QUB");

		var totalOperations = 8

		// Wait for all entries to get saved
		var intvl = setInterval(function() {
			if (operations >= totalOperations) { 
				console.log("Ending script after " + operations + " data being inserted.");
				process.exit();
			}
		}, 100);
	});
});


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

function createGame(name) {
	Game.create({name:name}, function(err, game) {
		if (err)
			console.log(err);
		else
			console.log("-- Game " + name + " inserted.");

		operations++;
	});
}