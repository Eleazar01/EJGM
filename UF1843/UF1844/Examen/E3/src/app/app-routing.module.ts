import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AccesoComponent } from './componentes/acceso/acceso.component';
import { InfoComponent } from './componentes/info/info.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ListaServiciosComponent } from './componentes/lista-servicios/lista-servicios.component';
import { GestionServiciosComponent } from './componentes/gestion-servicios/gestion-servicios.component';

const routes: Routes = [
  {path: '', component: InfoComponent},
  {path: 'Header', component: CabeceraComponent},
  {path: 'MiTienda', component: InfoComponent},
  {path: 'Catalogo', component: TiendaComponent},
  {path: 'Acceso', component: AccesoComponent}, 
  {path: 'Contacto', component: ContactoComponent}, 
  {path: 'Registro', component: RegistroComponent}, 
  {path: 'Carrito', component: CarritoComponent}, 
  {path: 'Footer', component: FooterComponent},
  {path: 'ListaServicios', component: ListaServiciosComponent,
  children:[
    {path:'GestionServicios', component: GestionServiciosComponent}
  ]},
  {path: '**', component: AppComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
