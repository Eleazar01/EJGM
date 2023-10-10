import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { InfoComponent } from './componentes/info/info.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { AccesoComponent } from './componentes/acceso/acceso.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ListaServiciosComponent } from './componentes/lista-servicios/lista-servicios.component';
import { GestionServiciosComponent } from './componentes/gestion-servicios/gestion-servicios.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InfoComponent,
    TiendaComponent,
    AccesoComponent,
    RegistroComponent,
    FooterComponent,
    CarritoComponent,
    ContactoComponent,
    ListaServiciosComponent,
    GestionServiciosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
