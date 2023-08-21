import { Component } from '@angular/core';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['../app.component.css']
})
export class ProfesorComponent {
  public imagen : string 
  
  constructor(){
    this.imagen = '../../assets/logo.jpeg'
  }
}
