// app/models/users.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Users  = new Schema({
    nombre: String,
	apellidos: String,
	nacimiento: Date,
	ciudad: String,
	cursos:[]
});

module.exports = mongoose.model('Usuario', Users);