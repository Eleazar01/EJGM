import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar Componentes
import { HomeComponent } from './componentes/home/home.component';
import { CrearCursosComponent } from './componentes/crear-cursos/crear-cursos.component';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CursoComponent} from './componentes/curso/curso.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';


const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'crearcurso', component: CrearCursosComponent},
  {path: 'listarcursos', component: ListarCursosComponent},
  {path: 'editarCurso/:id', component: CrearCursosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'verCurso/:id', component: CursoComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'crearUsuario', component: CrearUsuarioComponent},
  {path: 'perfil', component: PerfilComponent},

  {path: '**', redirectTo: '',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
