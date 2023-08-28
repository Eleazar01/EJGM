import { Injectable } from "@angular/core";
import { profesorBD } from "../models/profesor";


@Injectable({
    providedIn: 'root'
})
export class CursosService{
    private profesoresall: Array<profesorBD>

    constructor(){
        this.profesoresall = [
                new profesorBD("Manuel", "M. P.","manuelmacpe@gmail.com","../../assets/logo.jpeg"), 
                new profesorBD("Miguel", "R. R.","miguelrr@gmail.com","../../assets/logo.jpeg"), 
                new profesorBD("Javier", "D. M.","javierdm@gmail.com","../../assets/logo.jpeg")
        ]
}

getTexto(){
    return "Texto desde un servicio"
}

getAlumnos(): Array<profesorBD>{
    return this.profesoresall
}
}