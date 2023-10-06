// Módulos y Librerías
import { Component, OnInit  } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// Servicio - Modelo
import { GRegistro } from 'src/app/config/Modelos/gregistro';
import { GregistroService } from 'src/app/config/Servicios/gregistro';


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
        nombre: ['', Validators.required],
        apellidos: ['', Validators.required],
        Fnacimiento: ['', Validators.required],
        email: ['', Validators.required],
        telefono: ['', Validators.required],
        foto: ['', Validators.required],
        pass: [''],
        tipo: [''],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }
  
    ngOnInit(): void {
      this.esEditar();
      
    }
  
    agregarRegistro() {
  
      const REGISTRO: GRegistro = {
        nombre: this.registroForm.get('nombre')?.value,
        apellidos: this.registroForm.get('apellidos')?.value,
        Fnacimiento: this.registroForm.get('Fnacimiento')?.value,
        email: this.registroForm.get('email')?.value,
        telefono: this.registroForm.get('telefono')?.value,
        foto: this.registroForm.get('foto')?.value,
        pass: this.registroForm.get('pass')?.value,
        tipo: this.registroForm.get('tipo')?.value,
      }
  
      if(this.id !== null){
        // Editamos Registro
        this._registroService.editarRegistro(this.id, REGISTRO).subscribe(data =>{
          this.toastr.info('El registro fue actualizado con exito!', 'Registro Actualizado!');
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.registroForm.reset();
        })
      } else{
        // Agregamos Registro
        console.log(REGISTRO);
          this._registroService.guardarRegistro(REGISTRO).subscribe(data => {
          this.toastr.success('La historia fue registrada con exito!', 'Registro Registrada!');
          this.router.navigate(['/']);
        }, error => {
          console.log(error);
          this.registroForm.reset();
        })
      }
    }
    
    esEditar() {
      if(this.id !== null) {
        this.titulo = 'Editar registro';
        this._registroService.obtenerRegistro(this.id).subscribe(data => {
          this.registroForm.setValue({
            nombre: data.nombre,
            apellidos: data.apellidos,
            Fnacimiento: data.Fnacimiento,
            email: data.email,
            telefono: data.telefono,
            foto: data.foto,
            pass: data.pass,
            tipo: data.tipo,
            
          })
        })
      }
    }

    
}
