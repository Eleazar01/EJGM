import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GCurso } from '../Modelos/gcurso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GcursoService {

  url= 'http://127.0.0.1:3001/api/cursos/'

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any>{
    return this.http.get(this.url)
  }

  deleteCurso(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  postCurso(curso: GCurso): Observable<any> {
    return this.http.post(this.url, curso);
  }

  getCurso(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateCurso(id: string, curso: GCurso): Observable<any>{
    return this.http.put(this.url + id, curso)

  }
}