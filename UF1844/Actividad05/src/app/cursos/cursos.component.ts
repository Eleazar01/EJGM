import { Component, OnInit } from '@angular/core';
import { profesorBase } from '../models/modelos';
import { AlumnoBD } from '../models/modelos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['../app.component.css']
})
export class CursosComponent 
implements OnInit{
  public alumnosAll: Array<AlumnoBD>
  public imagen : string 
  public nombreProfesor : string
  public fotoProfesor : string
  public notaAlumno : number
  
  constructor(){
    this.notaAlumno = 5
    this.imagen = '../../assets/logo.jpeg'
    this.nombreProfesor = profesorBase.nombre
    this.fotoProfesor = profesorBase.foto
    this.alumnosAll = [
      new AlumnoBD('Miguel','Ramírez', 39, 'miguel@gmail.com','555 555 555 ', '../../assets/avatar.png',true),
      new AlumnoBD('Javier','Ramírez', 19, 'javier@gmail.com','555 555 555 ', '../../assets/avatar.png',false)
    ]
  }
  ngOnInit(): void {
    console.log(this.alumnosAll)
  }
}
