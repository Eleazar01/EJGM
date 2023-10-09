import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GRegistro } from '../Modelos/gregistro';

@Injectable({
  providedIn: 'root'
})
export class GregistroService {

  url= 'http://127.0.0.1:3001/api/usuarios/'

  constructor(private http: HttpClient) { }

  getUsuario(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarUsuario(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarUsuario(Registro: GRegistro): Observable<any> {
    return this.http.post(this.url, Registro);
  }

  obtenerUsuario(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarUsuario(id: string, Registro: GRegistro): Observable<any>{
    return this.http.put(this.url + id, Registro)

  }
}
