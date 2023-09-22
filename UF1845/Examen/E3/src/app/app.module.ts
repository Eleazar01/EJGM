import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//angular material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'; 
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop'; 
import {MatIconModule} from '@angular/material/icon';

//otros modulos
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';


//componentes
import { AppComponent } from './app.component';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    FormsModule,
    MatIconModule,
    ToastrModule.forRoot(),
    DragDropModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
