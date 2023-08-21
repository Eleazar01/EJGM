import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['../app.component.css']
})
export class CursoComponent {
  public imagen : string 
  
  constructor(){
    this.imagen = '../../assets/logo.jpeg'
  }
}
