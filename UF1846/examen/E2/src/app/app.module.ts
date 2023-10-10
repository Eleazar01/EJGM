import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon'


import { ToastrModule } from 'ngx-toastr'
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';
import { CrearCursosComponent } from './componentes/crear-cursos/crear-cursos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CursoComponent } from './componentes/curso/curso.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { AgregarArchivoComponent } from './componentes/agregar-archivo/agregar-archivo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListarCursosComponent,
    CrearCursosComponent,
    HomeComponent,
    ContactoComponent,
    CursoComponent,
    RegistroComponent,
    CrearUsuarioComponent,
    FooterComponent,
    PerfilComponent,
    AgregarArchivoComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
