export class GRegistro{
	public _id?: string
	public nombre: string
	public apellidos: string
    public Fnacimiento: string
    public email: string
	public password: string
    public telefono: string
	public tipo: string
   
    
	constructor(_id : string, nombre: string, apellidos: string, Fnacimiento: string, email: string, telefono: string, password: string, tipo: string){
        this._id = _id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.Fnacimiento = Fnacimiento;
        this.email = email;
        this.password = password;
        this.telefono = telefono;
        this.tipo = tipo;       
    
    }   
    
}