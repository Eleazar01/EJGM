import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RegistroComponent } from './componentes/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearCursoComponent,
    CrearUsuarioComponent,
    ContactoComponent,
    CursosComponent,
    HeaderComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
