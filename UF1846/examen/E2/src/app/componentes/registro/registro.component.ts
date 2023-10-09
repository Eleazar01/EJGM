import { Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { GRegistro } from 'src/app/config/Modelos/gregistro';
import { GregistroService } from 'src/app/config/Servicios/gregistro';
import { ToastrService } from 'ngx-toastr';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/** @title Input with a custom ErrorStateMatcher */

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  hide = true;
  hide2 = true;

  listUsuario: GRegistro[] = []

  constructor(private _gRegistroService: GregistroService,
    private toastr: ToastrService ){

}
ngOnInit(): void{
this.obtenerUsuario()
}
obtenerUsuario() {
this._gRegistroService.getUsuario().subscribe(data => {
console.log(data);
this.listUsuario = data;
}, error => {
console.log(error);
})
}
eliminarUsuario(id: any) {
this._gRegistroService.eliminarUsuario(id).subscribe(data => {
this.toastr.error('El usuario fue eliminado con exito' ,'Usuario Eliminado');
this.obtenerUsuario();
}, error => {
console.log(error);
})
}

}
