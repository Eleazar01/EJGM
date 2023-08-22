import { Component } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['../app.component.css']
})
export class CursoComponent {
  public imagen : string 
  public avatar : string
  
  constructor(){
    this.imagen = '../../assets/logo.jpeg'
    this.avatar = '../../assets/avatar.png'
  }
}
