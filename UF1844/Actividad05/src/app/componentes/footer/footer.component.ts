import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../../app.component.css']
})
export class FooterComponent {
  public imagen : string 
  public face : string = '../../../assets/face.png'
  public x : string = '../../../assets/instagram.png'
  public ins : string = '../../../assets/x.jpeg'

  
  constructor(){
    this.imagen = '../../../assets/logo.jpeg'
  }
}
