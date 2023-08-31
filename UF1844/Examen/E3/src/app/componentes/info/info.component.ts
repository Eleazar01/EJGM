import { Component } from '@angular/core';
import { tiendaBD } from '../modulos/info';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['../../app.component.css']
})
export class InfoComponent {
  public tienda: Array<tiendaBD>
  
  constructor(){
    this.tienda=[
      new tiendaBD('1',1,'../../../assets/tienda1.jpeg'),
      new tiendaBD('2',2,'../../../assets/tienda2.jpeg'),
      new tiendaBD('3',3,'../../../assets/tienda3.jpeg'),
      new tiendaBD('4',4,'../../../assets/tienda4.jpeg'),
    ]
  }

}
