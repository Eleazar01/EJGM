import { Component, OnInit, Input} from '@angular/core';
import { ServiciosBD } from '../modulos/lstServicios';
import { ListaserviciosService } from '../servicios/listaservicios.service'

@Component({
  selector: 'app-gestion-servicios',
  templateUrl: './gestion-servicios.component.html',
  styleUrls: ['./gestion-servicios.component.css'],
  providers: [ListaserviciosService]
})
export class GestionServiciosComponent implements OnInit{
  public listaServicios: Array<ServiciosBD>
  public codServicios: string[] = []
  public Pedidos: boolean
  public codigo:string = ""

  @Input() mensaje?: string


  
  constructor(private _listaServicios: ListaserviciosService){
    this.listaServicios = new Array<ServiciosBD>()
    this.Pedidos = false
   }

ngOnInit(): void {
  this.listaServicios = this._listaServicios.getServicios()
  this.getcodigos()
  this.mensaje = "DISPONIBLE"
  
}
getcodigos(){
  this.listaServicios.forEach((codigo)=>{
    this.codServicios.push(codigo.codSer)
  })
 }

 addContrato(){

  this.Pedidos = true

 }

}
