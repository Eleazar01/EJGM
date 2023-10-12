export class GCurso{
	public _id?: string
	public nombre: string
	public descripcion: string
	public categoria: string
	public imagen: string
	public duracion: number
	public temas: string
	
	
	constructor(nombre: string, descripcion: string, categoria: string, imagen: string, duracion: number, temas: string){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
		this.imagen = imagen
        this.duracion = duracion;
        this.temas = temas;
		
    }
}