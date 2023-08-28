import { Component,OnInit } from '@angular/core';
import { AlumnoService } from './Servicios/alumno.service';
import { AlumnoBD } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // public alumnos: Array<AlumnoBD>

  title = 'Actividad05'

  // constructor(private alumnoService: AlumnoService) { }
  // this.alumnos = [
  //   new AlumnoBD('pedro','g',5,'edasdad','623623623','../../../assets/avatar.png',true)
  // ]

  // ngOnInit() {
  //   this.alumnos = this.alumnoService.getAlumnos()
  // }
}