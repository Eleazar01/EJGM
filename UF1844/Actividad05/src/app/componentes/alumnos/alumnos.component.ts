import { Component } from '@angular/core';
import { AlumnoBD } from 'src/app/models/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['../../app.component.css']
})
export class AlumnosComponent {
  public imagen : string 
  public alumnosAll: Array<AlumnoBD>
  
  constructor(){
    this.imagen = '../../../assets/logo.jpeg'
    this.alumnosAll = [
      new AlumnoBD('Miguel','Ramírez', 39, 'miguel@gmail.com','555 555 555 ', '../../assets/avatar.png',true),
      new AlumnoBD('Javier','Ramírez', 19, 'javier@gmail.com','555 555 555 ', '../../assets/avatar.png',false),
      new AlumnoBD('Daniel','Ramírez', 20, 'javier@gmail.com','555 555 555 ', '../../assets/avatar.png',false),
      new AlumnoBD('Cristo','Ramírez', 31, 'javier@gmail.com','555 555 555 ', '../../assets/avatar.png',false),
      new AlumnoBD('Kilian','Ramírez', 60, 'javier@gmail.com','555 555 555 ', '../../assets/avatar.png',false)
    ]
  }
}
