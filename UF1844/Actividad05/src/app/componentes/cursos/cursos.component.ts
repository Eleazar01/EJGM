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
 
  
  constructor(){

    this.cursosAll = [
      new cursosBD('Electricidad','Principios básicos de la electricidad', 100),
      new cursosBD('AppWeb','Desarrollo de aplicaciones web', 400,),
      new cursosBD('Soldadura','Soldadura bonita', 50,)
    ]
  }
  ngOnInit(): void {
    console.log(this.cursosAll)
  }
}
