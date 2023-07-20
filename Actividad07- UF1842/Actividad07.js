// var x=parseInt(prompt("introduce la x"));
// var y=parseInt(prompt("introduce la y"));
// var mes=promt("Introduce el mes");
// var contrasena=promt("Introduce la contraseña");


// Actividad2
function calculos(){
    let resultado = 0;
    let x = parseInt(document.getElementById("cala").value);
    let y = parseInt(document.getElementById("calb").value);

    resultado = x + y;
    document.getElementById("resultadoc").innerHTML="Resultado: "+ resultado.toFixed(2) +"<br/>";

    resultado = x - y;
    document.getElementById("resultadoc2").innerHTML="Resultado: "+ resultado.toFixed(2) +"<br/>";

    resultado  = x * y;
    document.getElementById("resultadoc3").innerHTML="Resultado: "+ resultado.toFixed(2) +"<br/>";

    resultado = x / y;
    document.getElementById("resultadoc4").innerHTML="Resultado: "+ resultado.toFixed(2) +"<br/>";
}
// Actividad3
function comparativa(){
    let x = parseInt(document.getElementById("coma").value);
    let y = parseInt(document.getElementById("comb").value);
    if (x>=y){
   
        if (x==y){
        document.getElementById("compara").innerHTML=("Los números "+x +" y "+y+" son iguales"+"<br/>");
        }else{
        document.getElementById("compara").innerHTML=(x +" es el mayor de los dos"+"<br/>");
        }   
    }else{
        document.getElementById("compara").innerHTML=(y +" es el mayor de los dos"+"<br/>");
    }
}
// Actividad4
function porcentninos(){
    let niños = parseInt(document.getElementById("niños").value);
    let niñas = parseInt(document.getElementById("niñas").value);
    var tniños = niños*100/(niños+niñas);
    var tniñas = 100-tniños;

    document.getElementById("tniños").innerHTML=("Hay un "+tniños.toFixed(2)+" % de niños"+"<br/>");
    document.getElementById("tniñas").innerHTML=("Hay un "+tniñas.toFixed(2)+" % de niños"+"<br/>");
    
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
function validar(contraseña){
    for(var i=0;i<3; i++){
        var contraseña = prompt("Introduce la contraseña");

        if(contraseña=="123456"){
        document.write("Es correcto");
        break;
        }
    }
}
//Actividad9
function tabla(tabla){
    for(b=0; b<tabla; b++){
        x = 1;
        for(i=0; i<10; i++){
            document.write(x+" x "+z+" = "+(y=x*z+"<br/>"));
            x++;
        } 
        z++;
    }
}
//Actividad10
function descuento(mes,precio){
    switch(mes) {
        case "enero":
        case "febrero":
            pfinal = precio*0.80;
            document.write("El precio final es "+pfinal +"<br/>");
            break;
        case "julio":
        case "agosto":
            pfinal = precio*0.85;
            document.write("El precio final es "+pfinal +"<br/>");
            break;
        case "noviembre":
        case "diciembre":
            pfinal = precio*0.75;
            document.write("El precio final es "+pfinal +"<br/>");
        break;
        default:
            pfinal = precio;
            document.write("El precio final es "    +pfinal +"<br/>");
        break;
    }
}
//Actividad11
function login(usuario,pasword){
    if(usuario == "Admin"){
        var pasword = prompt("Introduce la contraseña");
        if (pasword == "Webmaster"){
            document.write("Bienvenido");
        }else if(pasword ==""|| pasword == null){
            document.write("Cancelado");
        }else{
            document.write("Contraseña incorrecta");
        }
    }else if(usuario=="" || usuario == null){
        document.write("Cancelado");
    }else{
        document.write("Incorrecto");
    }   
}
//Actividad12
function comprobar() {
    let operador = document.getElementById("operadores").value;
    resultado = eval(operador);
    document.getElementById("resultado").innerHTML="Resultado: "+ resultado;
}