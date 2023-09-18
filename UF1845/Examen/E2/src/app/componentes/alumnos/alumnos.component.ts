import { Component, OnInit } from '@angular/core';
import { AlumnoBD } from 'src/app/models/alumno';
import { save_cursoService } from 'src/app/Servicios/curso.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['../../app.component.css']
})
export class AlumnosComponent implements OnInit{
  public alumnosall = new Array<AlumnoBD>
  public imagen : string 
  public alumnosAll: Array<AlumnoBD>
  
  constructor(private _cursosService: save_cursoService){
    this.imagen = '../../../assets/logo.jpeg'
    this.alumnosAll = [
      new AlumnoBD('Miguel','Ramírez', 39, 'miguel@gmail.com','555 555 555 ', '../../assets/avatar.png',true),
      new AlumnoBD('Javier','Ramírez', 19, 'javier@gmail.com','555 555 555 ', '../../assets/avatar.png',false),
      new AlumnoBD('Daniel','Ramírez', 20, 'javier@gmail.com','555 555 555 ', '../../assets/avatar.png',false),
      new AlumnoBD('Cristo','Ramírez', 31, 'javier@gmail.com','555 555 555 ', '../../assets/avatar.png',false),
      new AlumnoBD('Kilian','Ramírez', 60, 'javier@gmail.com','555 555 555 ', '../../assets/avatar.png',false)
    ]
  }
   ngOnInit(): void {
    // this.alumnosAll = this._cursosService.getAlumnos();
    // this.getcorreosEle();
  }
}
