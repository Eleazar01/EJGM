import { Injectable } from "@angular/core";
import { cursosBD } from "../models/curso";


@Injectable({
    providedIn: 'root'
})
export class CursosService{
    private cursosall: Array<cursosBD>

    constructor(){
        this.cursosall = [
                new cursosBD("Manuel", "M. P.", 54), 
                new cursosBD("Miguel", "R. R.", 39), 
                new cursosBD("Javier", "D. M.", 19)
        ]
}

getTexto(){
    return "Texto desde un servicio"
}

getAlumnos(): Array<cursosBD>{
    return this.cursosall
}
}