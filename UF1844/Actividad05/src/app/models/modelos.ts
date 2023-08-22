export var profesorBase ={
    nombre : 'Manuel',
    apellidos : 'M.P',
    correo: 'manuelmacpe@gmail.com',
    foto : '../../assets/avatar.png'
}
  
export class AlumnoBD{
    constructor(
      public nombreA : string,
      public apellidosA : string,
      public edadA : number,
      public correoA : string,
      public telefonoA : string,
      public fotoA : string,
      public estadoA : boolean,
    ){}
}