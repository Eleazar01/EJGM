import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GRegistro } from '../Models/gregistro';

@Injectable({
  providedIn: 'root'
})
export class GregistroService {

  url= 'http://localhost:3700/api/registros/'

  constructor(private http: HttpClient) { }

  getRegistros(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarRegistro(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarRegistro(Registro: GRegistro): Observable<any> {
    return this.http.post(this.url, Registro);
  }

  obtenerRegistro(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarRegistro(id: string, Registro: GRegistro): Observable<any>{
    return this.http.put(this.url + id, Registro)

  }
}
