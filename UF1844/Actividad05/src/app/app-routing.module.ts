import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar componentes
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { AppComponent } from './app.component';
import { AccesoComponent } from './componentes/acceso/acceso.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { CursoComponent } from './componentes/curso/curso.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path: '', component: AccesoComponent},
  {path: 'alumno', component: AlumnoComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'acceso', component: AccesoComponent},
  {path: 'contacto', component: ConsultaComponent},
  {path: 'curso', component: CursoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'profesor', component: ProfesorComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
