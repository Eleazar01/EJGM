import { Component} from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-alumnos',
  exportAs: 'cdkListboxReactiveFormsExample',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  
})
export class AlumnosComponent {
  languages = ['Jose', 'Kilian', 'Aron', 'Eleazar', 'Miguel'];
  languageCtrl = new FormControl(['Eleazar']);
}
