import { Component} from '@angular/core';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['../../app.component.css']
})
export class AlumnoComponent{
  public imagen : string 
  public avatar : string
  
  constructor(){
    this.imagen = '../../../assets/logo.jpeg'
    this.avatar = '../../../assets/avatar.png'
    
  }
}