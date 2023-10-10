import { Component, OnInit} from '@angular/core';
import { cursosBD } from 'src/app/models/curso';
import { Global } from 'src/app/Servicios/global';
import { save_cursoService } from 'src/app/Servicios/curso.service';

@Component({
  selector: 'app-crearcurso',
  templateUrl: './crearcurso.component.html',
  styleUrls: ['./crearcurso.component.css'],
  providers: [save_cursoService]
})

export class CrearcursoComponent implements OnInit {
  public title: string
  public curso: cursosBD
  public save_curso: any
  public status: any
  public result: any

  constructor(private _cursoService: save_cursoService){
    this.result = null
    this.title = 'Crear Curso'
    this.curso = new cursosBD('','','','',6,'','')
  }
  ngOnInit(): void {
  }
  onSubmit(form: {reset: ()=> void}){
    this._cursoService.saveCurso(this.curso).subscribe(
      response => {
        if(response.curso){
          this.save_curso = this.result.curso
          this.status = 'success'
          form.reset()
        }else{
          this.status = 'failed'
        }
      }
    )
  }
}
