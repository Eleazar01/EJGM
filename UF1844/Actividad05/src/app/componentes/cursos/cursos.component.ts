import { Component, OnInit } from '@angular/core';
import { cursosBD } from 'src/app/models/curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['../../app.component.css']
})
export class CursosComponent 
implements OnInit{
  public cursosAll: Array<cursosBD>
  public registrado: boolean
  public Nota : number
 
  
  constructor(){
    this.registrado = false
    this.Nota = 0

    this.cursosAll = [ ]
  }
  ngOnInit(): void {
    console.log(this.cursosAll)
  }
  setRegistrado(){
    this.registrado = true
  }
  unsetRegistrado(){
    this.registrado = false
  }
}
