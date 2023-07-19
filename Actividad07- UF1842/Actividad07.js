var x=parseInt(prompt("introduce la x"));
var y=parseInt(prompt("introduce la y"));
// var mes=promt("Introduce el mes");
// var contrasena=promt("Introduce la contraseña");
// Actividad2
function calculos(x,y){
    var resultado = 0;

    resultado = x + y;
    document.write(resultado +"<br/>");

    resultado = x - y;
    document.write(resultado +"<br/>");

    resultado = x * y;
    document.write(resultado.toFixed(2) +"<br/>");

    resultado = x / y;
    document.write(resultado.toFixed(2) +"<br/>");
}
calculos(x,y);
// Actividad3
function comparativa(x,y){
    if (x>=y){
   
        if (x==y){
        document.write("Los números "+x +" y "+y+" son iguales"+"<br/>");
        }else{
        document.write(x +" es el mayor de los dos"+"<br/>");
        }   
    }else{
        document.write(y +" es el mayor de los dos"+"<br/>");
    }
}
comparativa(x,y);
// Actividad4
function porcentninos(niños,niñas){
    var tniños = niños*100/(niños+niñas);
    var tniñas = 100-tniños;

    document.write("Hay un "+tniños.toFixed(2)+" % de niños"+"<br/>");
    document.write("Hay un "+tniñas.toFixed(2)+" % de niñas"+"<br/>");
}
porcentninos(x,y)
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
descuento(x,mes);
//Actividad6
function validar(contraseña){
    for(var i=0;i<3; i++){
        var contraseña = prompt("Introduce la contraseña");

        if(contraseña=="123456"){
        document.write("Es correcto");
        break;
        }
    }
    validar(contrasena);
}