import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['../../app.component.css']
})
export class ContactoComponent {
  public contacton :string
  public contactoe :string
  public contactoa :string
  public contactot :string
  constructor(){
    this.contacton=''
    this.contactoe=''
    this.contactoa=''
    this.contactot=''
  }
}
