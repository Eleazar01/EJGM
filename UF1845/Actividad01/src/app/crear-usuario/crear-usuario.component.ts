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
      Fnacimiento: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      foto: ['', Validators.required],
      pass: ['', Validators.required],
      tipo: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  //crear Usuario

  agregarUsuario() {

    const USUARIO: GRegistro = {
      nombre: this.usuarioForm.get('nombre')?.value,
      apellidos: this.usuarioForm.get('apellidos')?.value,
      Fnacimiento: this.usuarioForm.get('Fnacimiento')?.value,
      email: this.usuarioForm.get('email')?.value,
      telefono: this.usuarioForm.get('telefono')?.value,
      foto: this.usuarioForm.get('foto')?.value,
      pass: this.usuarioForm.get('pass')?.value,
      tipo: this.usuarioForm.get('tipo')?.value
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
          Fnacimiento: data.Fnacimiento,
          email: data.email,
          telefono: data.telefono,
          foto: data.foto,
          pass: data.pass,
          tipo: data.tipo
        })
      })
    }
  }
}
