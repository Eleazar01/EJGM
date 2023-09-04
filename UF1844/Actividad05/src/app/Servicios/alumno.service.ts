import { Injectable } from "@angular/core";
import { usuarios } from "../models/alumno";


@Injectable({
    providedIn: 'root'
})
export class AlumnoService{
    private alumnosall: Array<usuarios>

    constructor(){
        this.alumnosall = [
                new usuarios("Manuel", "M. P.", 54,"manuelmacpe@gmail.com", "667936811","../../assets/logo.jpeg", true,"",true,""), 
                new usuarios("Miguel", "R. R.", 39,"miguelrr@gmail.com", "123456789","../../assets/logo.jpeg", true), 
                new usuarios("Javier", "D. M.", 19,"javierdm@gmail.com", "123456789","../../assets/logo.jpeg", true)
        ]
}

getTexto(){
    return "Texto desde un servicio"
}

getAlumnos(): Array<AlumnoBD>{
    return this.alumnosall
}
}