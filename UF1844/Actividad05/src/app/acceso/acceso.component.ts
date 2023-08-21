import { Component } from '@angular/core';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['../app.component.css']
})
export class AccesoComponent {
  public imagen : string 
  
  constructor(){
    this.imagen = '../../assets/logo.jpeg'
  }
}
