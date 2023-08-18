//Clase

class Camiseta {
    //Propiedades (caracteristicas del objeto)
    private color:string;
    private marca:string;
    private precio:string;
    private talla:string;
    private modelo:string;

    //métodos()
    constructor(color:string, modelo:string, marca:string, precio:string, talla:string){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color:string){
    this.color = color;
    }
    public getColor(){
    return this.color;
    }
}

//Clase hija

class Sudadera extends Camiseta{
    public capucha: boolean;

    constructor(color: string, modelo: string, marca: string, precio: string, talla: string) {
        super(color, modelo, marca, precio, talla);
        this.capucha = false; // Valor predeterminado
    }

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }
    getCapucha(): boolean {
        return this.capucha;
    }
}


var camiseta = new Camiseta ( 'rojo', 'Manga Corta', 'Una', 'L', '30' );

console.log(camiseta);
console.log(Camiseta);

var sudadera_una = new Sudadera ( 'rojo', 'Manga Corta', 'Una', 'L', '30' );

sudadera_una.setCapucha(true);

console.log(sudadera_una);
