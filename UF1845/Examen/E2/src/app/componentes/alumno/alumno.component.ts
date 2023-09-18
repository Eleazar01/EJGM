import { Component} from '@angular/core';
import { AlumnoBD } from 'src/app/models/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['../../app.component.css']
})
export class AlumnoComponent{
  public imagen : string 
  public avatar : string
  public alumnos: Array<AlumnoBD>
  
  constructor(){
    this.imagen = '../../../assets/logo.jpeg'
    this.avatar = '../../../assets/avatar.png'
    this.alumnos = [
      new AlumnoBD('Miguel','Ramírez', 39, 'miguel@gmail.com','555 555 555 ', '../../assets/avatar.png',true),
      new AlumnoBD('Javier','Ramírez', 19, 'javier@gmail.com','555 555 555 ', '../../assets/avatar.png',false),
      new AlumnoBD('Daniel','Ramírez', 20, 'javier@gmail.com','555 555 555 ', '../../assets/avatar.png',false),
      new AlumnoBD('Cristo','Ramírez', 31, 'javier@gmail.com','555 555 555 ', '../../assets/avatar.png',false),
      new AlumnoBD('Kilian','Ramírez', 60, 'javier@gmail.com','555 555 555 ', '../../assets/avatar.png',false)
    ]
    
  }
}