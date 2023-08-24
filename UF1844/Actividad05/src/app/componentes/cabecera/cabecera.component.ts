import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['../../app.component.css']
})
export class CabeceraComponent {
  public imagen : string 
  
  constructor(private route : Router){
    this.imagen = '../../../assets/logo.jpeg'

  }
  IraPagina(url:string): void{
    this.route.navigate([url]);
  }
}
