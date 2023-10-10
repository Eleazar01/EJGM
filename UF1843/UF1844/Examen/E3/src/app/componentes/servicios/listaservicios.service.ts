import { Injectable } from '@angular/core';
import { ServiciosBD } from '../modulos/lstServicios';

@Injectable({
  providedIn: 'root'
})
export class ListaserviciosService {
  private listaServicios: Array<ServiciosBD>
  constructor() { 
    this.listaServicios = [
                new ServiciosBD("100", "Sastrería","Servicio de sastrería por prenda", 20,"../../../assets/sastre.jpg", true), 
                new ServiciosBD("101", "Estampado de ropa","Servicio de estampado en ropa con plantilla de cliente", 30,"../../../assets/estampado2.jpeg", true), 
                new ServiciosBD("102", "Estampado de ropa","Servicio de estamapdo en ropa, realizando nosotros el diseño", 60,"../../../assets/estampado.png", true),
                new ServiciosBD("103", "Lavandería","Servicio de lavandería", 20,"../../../assets/lavanderia.jpg", true)
              ]
  }
  getServicios():Array<ServiciosBD>{
    return this.listaServicios
  }

}
