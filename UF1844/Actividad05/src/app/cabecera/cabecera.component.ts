import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['../app.component.css']
})
export class CabeceraComponent {
  public imagen : string 
  
  constructor(){
    this.imagen = '../../assets/logo.jpeg'
  }
}
