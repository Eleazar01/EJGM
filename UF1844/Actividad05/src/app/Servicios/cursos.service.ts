import { Injectable } from "@angular/core";
import { AlumnoBD } from "../models/alumno";


@Injectable({
    providedIn: 'root'
})
export class CursosService{
    private alumnosall: Array<AlumnoBD>

    constructor(){
        this.alumnosall = [
                new AlumnoBD("Manuel", "M. P.", 54,"manuelmacpe@gmail.com", "667936811","../../assets/logo.jpeg", true), 
                new AlumnoBD("Miguel", "R. R.", 39,"miguelrr@gmail.com", "123456789","../../assets/logo.jpeg", true), 
                new AlumnoBD("Javier", "D. M.", 19,"javierdm@gmail.com", "123456789","../../assets/logo.jpeg", true)
        ]
}

getTexto(){
    return "Texto desde un servicio"
}

getAlumnos(): Array<AlumnoBD>{
    return this.alumnosall
}
}