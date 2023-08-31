import { Injectable } from '@angular/core';
import { ServiciosBD } from '../modulos/lstServicios';

@Injectable({
  providedIn: 'root'
})
export class ListaserviciosService {
  private listaServicios: Array<ServiciosBD>
  constructor() { 
    this.listaServicios = [
                new ServiciosBD("100", "Consultoría","Servicio de consultoría sobre formación en programación frontend, backend y fullstack", 60,"./assets/media/consultoria.png", true), 
                new ServiciosBD("101", "Formación Frontend","Servicio de formación sobre  programación frontend", 160,"./assets/media/frontend.jpg", true), 
                new ServiciosBD("102", "Formación Backend","Servicio de formación sobre  programación Backend", 160,"./assets/media/backend.png", true),
                new ServiciosBD("103", "Formación FullStack","Servicio de formación sobre  programación FullStock", 300,"./assets/media/fullstack.jpg", true)
              ]
  }
  getServicios():Array<ServiciosBD>{
    return this.listaServicios
  }

}
