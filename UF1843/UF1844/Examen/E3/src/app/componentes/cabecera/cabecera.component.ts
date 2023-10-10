import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  public logo : string
  constructor(private routes : Router){
    this.logo='../../../assets/logo.png'
  }
  Ir(url:string):void{
    this.routes.navigate([url])
  }
}
