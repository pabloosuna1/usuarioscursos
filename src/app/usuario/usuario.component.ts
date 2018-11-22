import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  /*Añadir*/
  usuarios: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/usuario').subscribe(data => {
      console.log("ENTRA");
      this.usuarios = data;
    });
  }
}
