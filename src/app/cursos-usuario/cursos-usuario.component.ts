import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursos-usuario',
  templateUrl: './cursos-usuario.component.html',
  styleUrls: ['./cursos-usuario.component.css'],
  encapsulation: ViewEncapsulation.None //Añadido
})
export class CursosUsuarioComponent implements OnInit {

  cursos={};
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
	   this.getCursoUsuario(this.route.snapshot.params['id']);
  }

  getCursoUsuario(id) {
    this.http.get('usuario/usuarios/cursos/'+id).subscribe(data => {
	  console.log(data);
      this.cursos = data;
    });
  }
}