var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Usuario= require('../app/models/users.js');
var Curso= require('../app/models/cursos.js');


router.route('/')

    // creamos un usuario (accessed at POST http://localhost:8080/usuario)
    .post(function(req, res) {
		console.log(req.params);
		var usuario = new Usuario(); 
        usuario.nombre = req.body.nombre;  // añadimos el nombre
		usuario.apellidos = req.body.apellidos;  // añadimos los apellidos
		usuario.nacimiento = req.body.nacimiento;  // añadimos la fecha de nacimiento
		usuario.ciudad = req.body.ciudad;  // añadimos la ciudad
		
        // guardmos el nuevo usuario
        usuario.save(function(err) {
            res.json({ mensaje: 'Usuario creado con éxito!' });
        });

     })
	// ver todos los usuarios(accessed at GET http://localhost:8080/usuario)
    .get(function(req, res) {
        Usuario.find(function(err, usuarios) {
            if (err)
                res.send(err);

            res.json(usuarios);
        });
    });
router.route('/cursos')

    // creamos un curso (accessed at POST http://localhost:8080/usuario/cursos)
    .post(function(req, res) {
        var curso = new Curso(); 
        curso.nombre = req.body.nombre;  // añadimos el nombre
		curso.temas = req.body.temas;  // añadimos el numero de temas
		curso.horas = req.body.horas;  // añadimos el numero de horas
		curso.nivel = req.body.nivel;  // añadimos el nivel del curso
		
        // guardmos el nuevo curso
        curso.save(function(err) {
            res.json({ mensaje: 'Curso creado con éxito!' });
        });

     })
	// ver todos los cursos(accessed at GET http://localhost:8080/usuario/cursos)
    .get(function(req, res) {
        Curso.find(function(err, cursos) {
            if (err)
                res.send(err);

            res.json(cursos);
        });
    });

		//buscar usuario por id
	router.route('/usuarios/:usuario_id')
    //buscar usuario por id (accessed at GET http://localhost:8080/usuario/usuarios/:usuario_id)
    .get(function(req, res) {
        Usuario.findById(req.params.usuario_id, function(err, usuario) {
            if (err)
                res.send(err);
            res.json(usuario);
        });
    })
	
	//actualizr usuario por id (accessed at GET http://localhost:8080/usuario/usuarios/:usuario_id)
    .put(function(req, res) {

     
        Usuario.findById(req.params.usuario_id, function(err, usuario) {

            if (err)
                res.send(err);
			usuario.nombre=req.body.nombre;
			usuario.apellidos=req.body.apellidos;
			usuario.nacimiento=req.body.nacimiento;
            usuario.ciudad = req.body.ciudad;  
			// actualizar ciudad usuario
            usuario.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ mensaje: 'Usuario actualizado!' });
            });

        });
	})
	
	router.route('/usuarios/:usuario_id/nuevo')
	//añadir curso a usuario usuario por id (accessed at GET http://localhost:8080/usuario/usuarios/:usuario_id/:curso_id)
    .put(function(req, res) {
		console.log("Aplega->"+req.body.curso_id)
        Usuario.findById(req.params.usuario_id, function(err, usuario) {
            if (err)
                res.send(err);
            usuario.cursos.push(req.body.curso_id);  // añadir curso a usuario
            usuario.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ mensaje: 'Curso añadido al usuario!' });
            });

        });
	})
	
	//buscar curso por id
	router.route('/cursos/:curso_id')
    //buscar curso por id (accessed at GET http://localhost:8080/usuario/cursos/curso_id)
    .get(function(req, res) {
        Curso.findById(req.params.curso_id, function(err, curso) {
            if (err)
                res.send(err);
            res.json(curso);
        });
    }).put(function(req, res) {
        Curso.findById(req.params.curso_id, function(err, curso) {
            if (err)
                res.send(err);
			curso.nombre=req.body.nombre;
			curso.temas=req.body.temas;
			curso.horas=req.body.horas;
            curso.nivel = req.body.nivel;  
			// actualizar ciudad usuario
            curso.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ mensaje: 'Curso actualizado!' });
            });

        });
	})
	
	//buscar cursos de un usuario
	router.route('/usuarios/cursos/:usuario_id')
    .get(function(req, res) {
        Usuario.findById(req.params.usuario_id, function(err, usuario) {
            if (err)
                res.send(err);
            return usuario;
        }).then(function(usuario){
			Curso.find({ "_id": { "$in": usuario.cursos } },function(err, curso) {
				res.json(curso);
			})
		})
    })
	
    //buscar usuarios de un curso
	router.route('/cursos/usuario/:curso_id')
    .get(function(req, res) {
        Usuario.find({ "cursos": req.params.curso_id }, function(err, usuario) {
            if (err)
                res.send(err);
            res.json(usuario);
        })
	})
	
    //eliminar curso de un usario
	router.route('/delete/usuarios/cursos/:usuario_id/:curso_id')
    .get(function(req, res) {
        Usuario.update( { _id: req.params.usuario_id },
						{ $pull: { "cursos": req.params.curso_id } }, function(err, usuario) {
            if (err)
                res.send(err);
            res.json(usuario);
        })
    })
	
module.exports = router;