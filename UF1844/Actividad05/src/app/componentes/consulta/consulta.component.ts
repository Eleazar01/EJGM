import { Component } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['../../app.component.css']
})
export class ConsultaComponent {
  public imagen : string 
  public contacton :string
  public contactoe :string
  public contactoa :string
  public contactot :string
  
  constructor(){
    this.imagen = '../../../assets/logo.jpeg'
    this.contacton=''
    this.contactoe=''
    this.contactoa=''
    this.contactot=''
  }
}
