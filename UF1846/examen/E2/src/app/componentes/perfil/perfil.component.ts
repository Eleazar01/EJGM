// Módulos y Librerías
import { Component, OnInit  } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

// Servicio - Modelo
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
        nombre: [''],
        apellidos: [''],
        Fnacimiento: [''],
        email: [''],
        password: [''],
        telefono: [''],
        tipo: [''],
        foto: [''],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }
  
    ngOnInit(): void {
      this.esEditarp();
      
    }
    
    esEditarp() {
      if(this.id !== null) {
        this.titulo = 'Editar registro';
        this._registroService.obtenerUsuario(this.id).subscribe(data => {
          this.registroForm.setValue({
            nombre: data.nombre,
            apellidos: data.apellidos,
            Fnacimiento: data.Fnacimiento,
            email: data.email,
            password: data.password,
            telefono: data.telefono,
            tipo: data.tipo,
            foto: data.foto,
            
          })
        })
      }
    }

    
}
