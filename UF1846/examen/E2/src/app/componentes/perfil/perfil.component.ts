// Módulos y Librerías
import { Component, OnInit  } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RestService } from 'src/app/config/Servicios/rest.service';

// Servicio - Modelo
import { GregistroService } from 'src/app/config/Servicios/gregistro';
import { GRegistro } from 'src/app/config/Modelos/gregistro';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent  implements OnInit{
  registroForm: FormGroup;
  verRegistro: any
  titulo = 'Editar registro';
    id: string | null;
    constructor(private fb: FormBuilder,
                private router: Router,
                private toastr: ToastrService,
                private _registroService: GregistroService,
                private aRouter: ActivatedRoute) { 
      this.registroForm = this.fb.group({
        nombre: [''],
        apellidos: [''],
        Fnacimiento: [''],
        email: [''],
        password: [''],
        telefono: [''],
        tipo: ['']
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }
    agregarUsuario() {
  
      const USER: GRegistro = {
        nombre: this.registroForm.get('nombre')?.value,
        apellidos: this.registroForm.get('apellidos')?.value,
        Fnacimiento: this.registroForm.get('Fnacimiento')?.value,
        email: this.registroForm.get('email')?.value,
        password: this.registroForm.get('password')?.value,
        telefono: this.registroForm.get('telefono')?.value,
        tipo: this.registroForm.get('tipo')?.value,
      }
  
      if(this.id !== null){
        // Editamos Usuario
        this._registroService.updateUsuario(this.id, USER).subscribe(data =>{
          this.toastr.info('El usuario fue actualizado con exito!', 'Usuario Actualizado!');
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.registroForm.reset();
        })
      } else{
        // Agregamos Usuario
        console.log(USER);
          this._registroService.postUsuario(USER).subscribe(data => {
          this.toastr.success('El usuario fue registrado con exito!', 'Usuario Registrado!');
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.registroForm.reset();
        })
      }
    }
  
    ngOnInit(): void {
      this.esEditarp();
      
    }
    
    esEditarp() {
      if(this.id !== null) {
        this.titulo = 'Editar registro';
        this._registroService.getUsuario(this.id).subscribe(data => {
          this.registroForm.setValue({
            nombre: data.nombre,
            apellidos: data.apellidos,
            Fnacimiento: data.Fnacimiento,
            email: data.email,
            password: data.password,
            telefono: data.telefono,
            tipo: data.tipo,     
          })
        })
      }
    }
}
