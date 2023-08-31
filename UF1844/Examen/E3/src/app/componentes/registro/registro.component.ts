import { Component } from '@angular/core';
import { usuarioBD } from '../modulos/registro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['../../app.component.css']
})
export class RegistroComponent {
  public registron = '';
  public registroa = '';
  public registroe = '';
  public registrop1 = '';
  public registrop2 = '';
  public registroed = '';
  public registroi = ''
 public usuario : Array<usuarioBD>
  constructor(){
    this.usuario =[
      new usuarioBD(this.registron,this.registroa,this.registroe,this.registrop1,this.registrop2,this.registroed,this.registroi)
    ]
  }
}
