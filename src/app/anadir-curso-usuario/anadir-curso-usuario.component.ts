import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../model/curso.model';

@Component({
  selector: 'app-anadir-curso-usuario',
  templateUrl: './anadir-curso-usuario.component.html',
  styleUrls: ['./anadir-curso-usuario.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AnadirCursoUsuarioComponent implements OnInit {

   id: number; 
   cursosUsuario:{};
   curso_id: any;
   cursos: {};
   
  constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute) { 
	this.id=this.route.snapshot.params['id'];
  }
   ngOnInit() {
	  //cogemos el identificador del usuario
	  this.getCursosUsuario();
	  this.getCursos();
  }
  
  getCursosUsuario() {
    this.http.get('/usuario/usuarios/cursos/'+this.id).subscribe(data => {
	  this.cursosUsuario = data;
    });
  }
  
   getCursos() {
    this.http.get('/usuario/cursos/').subscribe(data => {
	  this.cursos = data;
    });
  }

  actualizarCursoUsuario() {
    console.log("Añadir curso: " + this.id);
		this.actualizar().subscribe(result => {
          this.router.navigate(['/anadir-curso-usuario',this.id]);
        }, (err) => {
          console.log(err);
        }
      );
	}
  
  actualizar(){
	  return this.http.put('/usuario/usuarios/'+this.id+'/nuevo',{
		curso_id : this.curso_id
	 });
  }
}