import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gpevalua } from '../models/gpevalua';

@Injectable({
  providedIn: 'root'
})
export class GpevaluaService {

  url= 'http://localhost:3001'

  constructor(private http: HttpClient) { }

  getPevalua(): Observable<any>{
    return this.http.get(this.url)
  }

  eliminarPevalua(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarPevalua(pevalua: Gpevalua): Observable<any> {
    return this.http.post(this.url, pevalua);
  }

  obtenerPevalua(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  editarPevalua(id: string, pevalua: Gpevalua): Observable<any>{
    return this.http.put(this.url + id, pevalua)

  }
}
