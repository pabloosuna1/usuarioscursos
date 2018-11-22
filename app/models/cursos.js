// app/models/cursos.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Cursos  = new Schema({
    nombre: String,
	temas: Number,
	horas: Number,
	nivel: String
});

module.exports = mongoose.model('Cursos', Cursos);