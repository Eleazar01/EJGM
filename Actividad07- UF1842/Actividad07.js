// Actividad2
function calculos(x,y){
    var resultado = 0;

    resultado = x + y;
    document.write(resultado +"<br/>");

    resultado = x - y;
    document.write(resultado +"<br/>");

    resultado = x * y;
    document.write(resultado +"<br/>");

    resultado = x / y;
    document.write(resultado +"<br/>");
}
// Actividad3
function comparativa{
    if (x>=y){
   
        if (x==y){
        console.log("Los números "+x +" y "+y+" son iguales");
        }else{
        console.log(x +" es el mayor de los dos");
        }   
    }else{
        console.log(y +" es el mayor de los dos")
    }
}
// Actividad4
function porcentninos(niños,niñas){
    var tniños = niños*100/(niños+niñas);
    var tniñas = 100-tniños;

    console.log("Hay un "+tniños+" % de niños");
    console.log("Hay un "+tniñas+" % de niñas");
}
// Actividad5
function descuento(precio,mes){
    var pfinal= 0;
    document.write("El precio es  "+precio + " €"+"<br/>");
    document.write("El mes es "+mes +"<br/>");
    if (mes == "octubre"){
    pfinal = precio*0.85;
    }else{
    pfinal = precio;
    }
document.write("El precio final es "+pfinal +"<br/>");
}
//Actividad6
function validar{
    for(var i=0;i<3; i++){
        var contraseña = prompt("Introduce la contraseña");

        if(contraseña=="123456"){
        document.write("Es correcto");
        break;
        }
    }
}