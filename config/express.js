var express = require('express');

module.exports = function (app, config) {

  function errorHandler(err, req, res, next) {
  	switch(err.message) {
  		case "Unexpected end of input":
  			return res.json({ error: "bad input" }, 200);
  			break;
		default:
			return res.json({ error: err.message }, 200);
			break;
  	}
  }

  app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.compress());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(errorHandler);
  });
}