import { Component} from '@angular/core';
import { AlumnoService } from 'src/app/Servicios/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['../../app.component.css']
})
export class AlumnoComponent{
  public imagen : string 
  public avatar : string
  public alumnos: Array<AlumnoService>
  constructor(){
    this.imagen = '../../../assets/logo.jpeg'
    this.avatar = '../../../assets/avatar.png'
    this.alumnos = []
  }
}