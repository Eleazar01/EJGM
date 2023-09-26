import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './componentes/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ToastrModule } from 'ngx-toastr'
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';
import { CrearCursosComponent } from './componentes/crear-cursos/crear-cursos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CursoComponent } from './componentes/curso/curso.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListarCursosComponent,
    CrearCursosComponent,
    HomeComponent,
    ContactoComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
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
