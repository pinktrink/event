var mongoose = require('mongoose'); 


module.exports = function (app, config) {


	app.get('/', function(req, res) {
		return res.json({ message: 'hello'}, 200);
	});
}

