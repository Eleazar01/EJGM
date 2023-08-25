import { Component } from '@angular/core';
import { catalogoBD } from '../modulos/catalogo';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['../../app.component.css']
})
export class TiendaComponent {
  public catalogoAll: Array<catalogoBD>
  constructor(){
    this.catalogoAll=[
      new catalogoBD('1',36,48,50,'../../../assets/producto1.jpeg'),
      new catalogoBD('2',36,48,50,'../../../assets/producto2.jpeg'),
      new catalogoBD('3',36,48,50,'../../../assets/producto3.jpeg'),
      new catalogoBD('4',36,48,50,'../../../assets/producto4.jpeg'),
      new catalogoBD('5',36,48,50,'../../../assets/producto5.jpeg'),
      new catalogoBD('6',36,48,50,'../../../assets/producto6.jpeg'),
      new catalogoBD('7',36,48,50,'../../../assets/producto7.jpeg'),
      new catalogoBD('8',36,48,50,'../../../assets/producto8.jpeg'),
    ]
  }
}
