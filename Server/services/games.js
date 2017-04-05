var express = require('express');
var mongoose = require('mongoose');

var router = express.Router();
var Game = require('../members/game.js');

/* GET /games listing. */
router.get('/', function(req, res, next) {
  Game.find(function (err, games) {
    if (err) return next(err);
    res.json(games);
  });
});

/* GET /games/id */
router.get('/:id', function(req, res, next) {
  Game.findById(req.params.id, function(err, game) {
    if(err) res.send(err);
    res.json(game);
  });
});

module.exports = router;

/* MongoDB utility */

// // Load mongoose package and connect to mongoDB
// var mongoose = require('mongoose');
// var mongoURL = '127.0.0.1:27017';
// mongoose.connect('mongodb://' + mongoURL + '/CleanIT');

// /* Available service exports */

// module.exports = {
// 	getDevices: function() { return getDevices(); },
// 	getDevice:	function(id) { return getDevice(id); }
// };

// /* Service work */

// function getDevices() {
// 	return Device.find(function (err, todos) {
//   if (err) return console.error(err);
//   console.log(todos);});
// }

// function getDevice(id) {
// 	return {"Device": "Sens'it - " + id};
// }