import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['../../app.component.css']
})
export class ConsultaComponent {
  public imagen : string 
  
  constructor(){
    this.imagen = '../../../assets/logo.jpeg'
  }
}
