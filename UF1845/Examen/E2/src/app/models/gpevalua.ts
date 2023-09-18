export class Gpevalua{
	public _id?: string
	public nombre: string
	public apellidos: string
	public idTarea: string
	public description: string
	public puntuacion: number
	public estado: boolean
	constructor(nombre: string, apellidos: string, idTarea: string,description: string, puntuacion: number, estado: boolean,){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.idTarea = idTarea;
        this.description = description;
        this.puntuacion = puntuacion;
        this.estado = estado;
    }
}