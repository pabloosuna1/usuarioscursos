import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  usuario: Usuario;
  constructor(private http: HttpClient, private router: Router) {
		this.usuario=new Usuario();
  }

  ngOnInit() {
  }

  nuevoUsuario() {
	console.log("USER:"+this.usuario);
     this.insertar().subscribe(result => {
          this.router.navigate(['/usuario']);
        },(err) => {
          alert('Wrong username password');
        });
  }
  
  insertar(){
	 return this.http.post('/usuario',{
		nombre :	this.usuario.nombre,
		apellidos:	this.usuario.apellidos,
		nacimiento:	this.usuario.nacimiento,
		ciudad:	this.usuario.ciudad
	 });
  }
}
