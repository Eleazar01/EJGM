// Módulos y Librerías
import { Component, OnInit } from '@angular/core'
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr'
// Servicio - Modelo
import { Gpevalua } from 'src/app/models/gpevalua'
import { GpevaluaService } from 'src/app/Servicios/gpevalua.service'

@Component({
  selector: 'app-pevalua',
  templateUrl: './pevalua.component.html',
  styleUrls: ['./pevalua.component.css']
})
export class PevaluaComponent implements OnInit{
pevaluaForm: FormGroup;
titulo = 'Crear pevalua';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _pevaluaService: GpevaluaService,
              private aRouter: ActivatedRoute) { 
    this.pevaluaForm = this.fb.group({
      nombre: ['', Validators.required],
      duracion: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarpevalua() {

    const pevalua: Gpevalua = {
      nombre: this.pevaluaForm.get('nombre')?.value,
      duracion: this.pevaluaForm.get('duracion')?.value  
    }

    if(this.id !== null){
      // Editamos pevalua
      this._pevaluaService.editarPevalua(this.id, pevalua).subscribe(data =>{
        this.toastr.info('El pevalua fue actualizado con exito!', 'pevalua Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.pevaluaForm.reset();
      })
    } else{
      // Agregamos pevalua
      console.log(pevalua);
        this._pevaluaService.guardarPevalua(pevalua).subscribe(data => {
        this.toastr.success('El pevalua fue registrado con exito!', 'pevalua Registrado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.pevaluaForm.reset();
      })
    }
  }
  
  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar pevalua';
      this._pevaluaService.obtenerPevalua(this.id).subscribe(data => {
        this.pevaluaForm.setValue({
          nombre: data.nombre,
          duracion: data.duracion,
        })
      })
    }
  }

}
