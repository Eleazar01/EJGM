// Módulos y Librerías
import { Component, OnInit } from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr'

// Servicio - Modelo
import { GRegistro } from '../models/gregistro'
import { GregistroService } from '../servicios/gregistro'


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit{
UsuarioForm: FormGroup;
titulo = 'Crear usuario';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _UsuarioService: GregistroService,
              private aRouter: ActivatedRoute) { 
    this.UsuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      Fnacimiento: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
      foto: ['', Validators.required],
      pass: ['', Validators.required],
      tipo: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarCurso() {

    const usuario: GRegistro = {
      nombre: this.UsuarioForm.get('nombre')?.value,
      apellidos: this.UsuarioForm.get('apellidos')?.value,
      Fnacimiento: this.UsuarioForm.get('Fnacimiento')?.value,
      email: this.UsuarioForm.get('email')?.value,
      telefono: this.UsuarioForm.get('telefono')?.value,
      foto: this.UsuarioForm.get('foto')?.value,
      pass: this.UsuarioForm.get('pass')?.value,
      tipo: this.UsuarioForm.get('tipo')?.value
    }

    if(this.id !== null){
      // Editamos usuario
      this._UsuarioService.editarRegistro(this.id, usuario).subscribe(data =>{
        this.toastr.info('El usuario fue actualizado con exito!', 'usuario Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.UsuarioForm.reset();
      })
    } else{
      // Agregamos usuario
      console.log(usuario);
        this._UsuarioService.guardarRegistro(usuario).subscribe(data => {
        this.toastr.success('El usuario fue registrado con exito!', 'usuario Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.UsuarioForm.reset();
      })
    }
  }
  
  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar usuario';
      this._UsuarioService.obtenerRegistro(this.id).subscribe(data => {
        this.UsuarioForm.setValue({
          nombre: data.nombre,
          descripcion: data.descripcion,
          categoria: data.categoria,
          duracion: data.duracion,
          temas: data.temas
        })
      })
    }
  }

}
