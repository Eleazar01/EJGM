import { Auth } from "./auth.interface";
export interface User extends Auth{
    nombre: string;
    apellidos: string;
    Fnacimiento: string;
    telefono: string;
    tipo: string; 
    foto: string;
    anotaciones: string;    
}