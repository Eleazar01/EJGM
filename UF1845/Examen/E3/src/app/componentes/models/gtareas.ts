export class GTareas{
	public _id?: string
	public nombre: string
	public descripcion: string
	public puntuacion: number
	public estado: string
	public importancia: number
	constructor(nombre: string, descripcion: string, puntuacion: number, estado: string, importancia: number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.puntuacion = puntuacion;
        this.estado = estado;
        this.importancia = importancia;
    }
}