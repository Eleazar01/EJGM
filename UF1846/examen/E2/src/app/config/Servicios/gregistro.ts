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

  getUsuarios(): Observable<any>{
    return this.http.get(this.url)
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  postUsuario(Registro: GRegistro): Observable<any> {
    return this.http.post(this.url, Registro);
  }

  getUsuario(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateUsuario(id: string, Registro: GRegistro): Observable<any>{
    return this.http.put(this.url + id, Registro)

  }
}
