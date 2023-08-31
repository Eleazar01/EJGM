import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'E2';
  propiedadesH1: any

  constructor(){

    this.propiedadesH1 = {
      color: '#00214a',
      fontSize: '2em'
    }
  }
}