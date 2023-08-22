import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['../../app.component.css']
})
export class RegistroComponent {
  public imagen : string 
  
  constructor(){
    this.imagen = '../../../assets/logo.jpeg'
  }
}
