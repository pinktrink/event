
var express = require('express'),
 fs = require('fs');

var env = process.env.NODE_ENV || 'development',
	config = require('./config/config')[env],
	mongoose = require('mongoose')

mongoose.connect(config.db);

// Uncomment once we have the models defined
// var models_path = __dirname + '/app/models';

// fs.readdirSync(models_path).forEach(function (file) {
//   require(models_path + '/' + file);
// })


var app = express();
require('./config/express')(app, config);

require('./routes')(app, config);


app.listen(8080, function() {
  console.log('App started on port 8080')
});
