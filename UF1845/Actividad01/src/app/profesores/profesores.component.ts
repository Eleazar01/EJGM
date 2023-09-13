import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-profesores',
  exportAs: 'cdkListboxReactiveFormsExample',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent {
  languages = ['Jose', 'Manuel', 'Elena', 'Daoli', 'Ana'];
  languageCtrl = new FormControl(['Manuel']);
}
