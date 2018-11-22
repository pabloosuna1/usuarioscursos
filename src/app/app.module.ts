import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Añadir*/
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CursosUsuarioComponent } from './cursos-usuario/cursos-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { AnadirCursoUsuarioComponent } from './anadir-curso-usuario/anadir-curso-usuario.component';

const appRoutes: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent,
    data: { title: 'Lista Usuarios' }
  },{
    path: 'cursos-usuario/:id',
    component: CursosUsuarioComponent,
    data: { title: 'Cursos Usuario' }
  },
  {
    path :  'nuevo-usuario',
    component: NuevoUsuarioComponent,
    data: { title:  'Crear Usuario'  }
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent,
    data: { title: 'Editar Usuario' }
  },
  {
    path: 'anadir-curso-usuario/:id',
    component: AnadirCursoUsuarioComponent,
    data: { title: 'Anadir Curso a Usuario' }
  },
  { path: '',
    redirectTo: '/usuario',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    CursosUsuarioComponent,
    NuevoUsuarioComponent,
    EditarUsuarioComponent,
    AnadirCursoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, //Añadido
    HttpClientModule, //Añadido
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- para debug
    )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }