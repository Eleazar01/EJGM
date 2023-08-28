import { Injectable } from "@angular/core";
import { RegistroComponent } from "../registro/registro.component";

@Injectable({
    providedIn: 'root'
})
export class RegistroService{
    private accesoall: Array<RegistroComponent>
    constructor(){
        this.accesoall=[
            new RegistroComponent()
        ]
    }
}
