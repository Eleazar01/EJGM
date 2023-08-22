import { Component } from '@angular/core';
import { profesorBD } from 'src/app/models/profesor';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProfesoresComponent {
  public imagen : string 
  public profesoresAll : Array<profesorBD>
  
  constructor(){
    this.imagen = '../../../assets/logo.jpeg'
    this.profesoresAll = [
      new profesorBD('Manuel','Gil','manuel@gmail.com','../../../assets/avatar.png'),
    ]
  }
}
