// server.js

// Configuración base
// ==================================

// llamadas a módulos
var express    = require('express');        // instanciamos Express
var bodyParser = require('body-parser');	// instanciamos body-parser
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var app        = express();                 // definimos que nuestra app usa Express
var usuario = require('./routes/usuario');

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/apirestcurso'); // conexión a nuestra base de datos

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist','usuarioscursos'))); //añadir ruta correctamente de los recursos estáticos
app.use('/usuario', usuario);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;