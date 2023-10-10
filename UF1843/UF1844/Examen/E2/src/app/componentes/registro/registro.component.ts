import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['../../app.component.css']
})
export class RegistroComponent {
  public registron : string
  public registroa : string
  public registroe : string
  public registrop1 : string
  public registrop2 : string
  public registroed : string
  public registroi : string
  constructor(){
    this.registron = '';
    this.registroa = '';
    this.registroe = '';
    this.registrop1 = '';
    this.registrop2 = '';
    this.registroed = '';
    this.registroi = '';
  }
}
