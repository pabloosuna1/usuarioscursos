import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario.model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditarUsuarioComponent implements OnInit {
   
  usuario: Usuario;
  id: number; 
  
  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { 
	this.usuario=new Usuario();
	this.id=this.route.snapshot.params['id'];
  }

  ngOnInit() {
	  //cogemos el identificador del usuario
	  this.getUsuario();
  }
  
  getUsuario() {
    this.http.get('/usuario/usuarios/'+this.id).subscribe(data => {
      this.usuario.nombre = data["nombre"];
      this.usuario.apellidos = data["apellidos"];
      this.usuario.nacimiento = data["nacimiento"];
      this.usuario.ciudad = data["ciudad"];
      this.usuario.cursos = data["cursos"];
    });
	console.log("USUARIO "+this.usuario);
  }

  actualizarUsuario() {
		this.actualizar().subscribe(result => {
          this.router.navigate(['/usuario']);
        }, (err) => {
          console.log(err);
        }
      );
	}
  
  actualizar(){
	  return this.http.put('/usuario/usuarios/'+this.id,{
      nombre :	this.usuario.nombre,
      apellidos:	this.usuario.apellidos,
      nacimiento:	this.usuario.nacimiento,
      ciudad:	this.usuario.ciudad
	 });
  }
}
