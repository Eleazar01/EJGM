import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { CursosComponent } from './componentes/cursos/cursos.component';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { HeaderComponent } from './componentes/header/header.component';


const routes: Routes = [
  {path: 'cursos', component: CursosComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'registro', component:  RegistroComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crearCurso', component: CrearCursoComponent},
  {path: 'crearUsuario', component: CrearUsuarioComponent},
  {path: 'editarCurso/:id', component: CrearCursoComponent},
 

  {path: '**', redirectTo: '',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
