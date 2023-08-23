import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['../../app.component.css']
})
export class RegistroComponent {
  public imagen : string 
  public registron : string
  public registroa : string
  public registroe : string
  public registrop1 : string
  public registrop2 : string
  public registroed : number
  public registroi : string
  
  constructor(){
    this.imagen = '../../../assets/logo.jpeg'
    this.registron = ''
    this.registroa = ''
    this.registroe = ''
    this.registrop1 = ''
    this.registrop2 = ''
    this.registroed = ''
    this.registroi = ''
  }
}
