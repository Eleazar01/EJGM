// Módulos y Librerías
import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr'
// Servicio - Modelo
import { GRegistro } from '../Models/gregistro'
import { GregistroService } from '../servicios/gregistro'

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;
titulo = 'Registro de usuario';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _usuarioService: GregistroService,
              private aRouter: ActivatedRoute) { 
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      direccion: ['', Validators.required],
      direccion2: [''],
      telefono: ['', Validators.required],
      ciudad: ['', Validators.required],
      pais: ['', Validators.required],
      cpostal: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarUsuario() {

    const USUARIO: GRegistro = {
      nombre: this.usuarioForm.get('nombre')?.value,
      apellidos: this.usuarioForm.get('apellidos')?.value,
      email: this.usuarioForm.get('email')?.value,
      password: this.usuarioForm.get('password')?.value,
      direccion: this.usuarioForm.get('direccion')?.value,
      direccion2: this.usuarioForm.get('direccion2')?.value,
      telefono: this.usuarioForm.get('telefono')?.value,
      ciudad: this.usuarioForm.get('ciudad')?.value,
      pais: this.usuarioForm.get('pais')?.value,
      cpostal: this.usuarioForm.get('cpostal')?.value
    }

    if(this.id !== null){
      // Editamos Usuario
      this._usuarioService.editarRegistro(this.id, USUARIO).subscribe(data =>{
        this.toastr.info('El registro fue actualizado con exito!', 'Usuario Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      })
    } else{
      // Agregamos Usuario
      console.log(USUARIO);
        this._usuarioService.guardarRegistro(USUARIO).subscribe(data => {
        this.toastr.success('El usuario fue registrado con exito!', 'Usuario Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      })
    }
  }
  
  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar curso';
      this._usuarioService.obtenerRegistro(this.id).subscribe(data => {
        this.usuarioForm.setValue({
          nombre: data.nombre,
          apellidos: data.apellidos,
          email: data.email,
          password: data.password,
          direccion: data.direccion,
          direccion2: data.direccion2,
          telefono: data.telefono,
          ciudad: data.ciudad,
          pais: data.pais,
          cpostal: data.cpostal
        })
      })
    }
  }
}
