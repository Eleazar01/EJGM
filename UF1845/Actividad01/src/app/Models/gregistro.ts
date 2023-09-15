export class GRegistro{
	public _id?: string
	public nombre: string
	public apellidos: string
    public email: string
	public password: string
	public direccion: string
	public direccion2: string
    public telefono: string
    public ciudad: string
    public pais: string
    public cpostal: Number
    
	constructor(_id : string, nombre: string, apellidos: string, email: string, password: string, direccion: string, direccion2: string, telefono: string, ciudad: string, pais: string, cpostal: Number){
        this._id = _id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
        this.password = password;
        this.direccion = direccion;
        this.direccion2 = direccion2;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.pais = pais;
        this.cpostal = cpostal;
        
    }
    
    
}