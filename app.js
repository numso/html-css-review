
/**
 * Module dependencies.
 */

var http    = require('http'),
    express = require('express');

var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static('public'));
app.use(express.errorHandler());

http.createServer(app).listen(app.get('port'),
  function () {
    console.log('Express server listening on port ' + app.get('port'));
  }
);
