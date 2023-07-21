
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
function descuento(){
    let precio = parseInt(document.getElementById("precio").value);
    let mes = document.getElementById("mes").value;
    var pfinal= 0;
    document.getElementById("eprecio").innerHTML=("El precio es  "+precio + " €"+"<br/>");
    document.getElementById("emes").innerHTML=("El mes es "+mes +"<br/>");
    if (mes == "octubre"){
    pfinal = precio*0.85;
    }else{
    pfinal = precio;
    }
    document.getElementById("pfinal").innerHTML=("El precio final es "+pfinal +"<br/>");
}

//Actividad6
function validar(){
    for(var i=0;i<3; i++){
        let contrasena = document.getElementById("password").value;
        console.log(contrasena);
        if(contrasena == "123456"){
            document.getElementById("correcto").innerHTML = ("Bienvenido"+"<br/>");
            break;
        }else{
            document.getElementById("incorrecto").innerHTML=("Contraseña incorrecta"+"<br/>");
        }
    }
}

//Actividad9
function tabla(){
    let tablaa = document.getElementById("tablas").value;
    let g = 1;
    let h = 1;
    let j = 1;
    for(b=0; b<tablaa; b++){
        console.log("tablaa");
        for(i=0; i<10; i++){
            document.getElementById("mtabla").innerHTML = (g+" x "+h+" = "+(j = g * h+"<br/>"));
            h++;
        } 
        g++;
    }
}


//Actividad10
function descuentos(){
    let precios = parseInt(document.getElementById("precios").value);
    let meses = document.getElementById("meses").value;
    document.getElementById("cprecio").innerHTML = ("El precio es "+precios +"<br/>");
    document.getElementById("cmes").innerHTML = ("El mes es "+meses +"<br/>");
    switch(meses) {
        case "enero":
        case "febrero":
            ptotal = precios*0.80;
            document.getElementById("cfinal").innerHTML = ("El precio final es "+ptotal +"<br/>");
            break;
        case "julio":
        case "agosto":
            ptotal = precios*0.85;
            document.getElementById("cfinal").innerHTML = ("El precio final es "+ptotal +"<br/>");
            break;
        case "noviembre":
        case "diciembre":
            ptotal = precios*0.75;
            document.getElementById("cfinal").innerHTML = ("El precio final es "+ptotal +"<br/>");
        break;
        default:
            ptotal = precios;
            document.getElementById("cfinal").innerHTML = ("El precio final es "+ptotal +"<br/>");
        break;
    }
}

//Actividad11
function login(){
    let usuario = document.getElementById("user").value;
    let pasword = document.getElementById("pass").value;
    if(usuario == "Admin"){
        if (pasword == "Webmaster"){
            document.getElementById("Bienvenido").innerHTML = ("Bienvenido");
        }else if(pasword ==""|| pasword == null){
            document.getElementById("Cancelado").innerHTML = "Intento de acceso Cancelado";
        }else{
            document.getElementById("Contraseñai").innerHTML = ("Contraseña incorrecta");
        }
    }else if(usuario=="" || usuario == null){
        document.getElementById("Cancelado2").innerHTML = ("Intento de acceso cancelado");
    }else{
        document.getElementById("Incorrecto2").innerHTML = ("Usuario incorrecto");
    }   
}

//Actividad12
function comprobar() {
    let operador = document.getElementById("operadores").value;
    resultado = eval(operador);
    document.getElementById("resultado").innerHTML="Resultado: "+ resultado;
}