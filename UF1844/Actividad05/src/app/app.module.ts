import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { CursoComponent } from './componentes/curso/curso.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';
import { ProfesorComponent } from './componentes/profesor/profesor.component';
import { AccesoComponent } from './componentes/acceso/acceso.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConsultaComponent } from './componentes/consulta/consulta.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { FooterComponent } from './componentes/footer/footer.component';

// import { AlumnoService } from './Servicios/alumno.service';
// import { CursosService } from './Servicios/curso.service';
// import { profesorService } from './Servicios/profesor.service';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursoComponent,
    AlumnosComponent,
    AlumnoComponent,
    ProfesoresComponent,
    ProfesorComponent,
    AccesoComponent,
    RegistroComponent,
    ConsultaComponent,
    CabeceraComponent,
    FooterComponent,
    // AlumnoService,
    // CursosService,
    // profesorService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
