import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['../../app.component.css']
})
export class InfoComponent {
  public tienda1: string
  public tienda2: string
  constructor(){
    this.tienda1='../../../assets/tienda1.jpeg',
    this.tienda2='../../../assets/tienda2.jpeg'
  }

}
