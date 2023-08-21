import { Component } from '@angular/core';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['../app.component.css']
})
export class ProfesoresComponent {
  public imagen : string 
  
  constructor(){
    this.imagen = '../../assets/logo.jpeg'
  }
}
