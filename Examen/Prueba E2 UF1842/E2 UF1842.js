// Actividad 02

function calculos(){
    let resultado = 0;
    let x = parseInt(document.getElementById("cala").value);
    let y = parseInt(document.getElementById("calb").value);
    let myarray =[];

    resultado = x + y;
    myarray.push("Resultado: "+ resultado.toFixed(2) +"<br/>");

    resultado = x - y;
    myarray.push("Resultado: "+ resultado.toFixed(2) +"<br/>");
    

    resultado  = x * y;
    myarray.push("Resultado: "+ resultado.toFixed(2) +"<br/>");
   

    resultado = x / y;
    myarray.push("Resultado: "+ resultado.toFixed(2) +"<br/>");
    
    document.getElementById("resultadoc").innerHTML= myarray.join("<br/>");
}
function cambiar() {
    document.getElementById("matrix").src ="img/img2.jpg";
}
function volver() {
    document.getElementById("matrix").src ="img/img1.jpg";
}


// Actividad 03

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

// Actividad 04

function porcentninos(){
    let niños = parseInt(document.getElementById("niños").value);
    let niñas = parseInt(document.getElementById("niñas").value);
    let tniños = niños*100/(niños+niñas);
    let tniñas = 100-tniños;

    document.getElementById("tniños").innerHTML=("Hay un "+tniños.toFixed(2)+" % de niños"+"<br/>");
    document.getElementById("tniñas").innerHTML=("Hay un "+tniñas.toFixed(2)+" % de niños"+"<br/>");
    
}

// Actividad 05

function descuento(){
    let precio = parseInt(document.getElementById("precio").value);
    let mes = document.getElementById("mes").value;
    let pfinal= 0;
    document.getElementById("eprecio").innerHTML=("El precio es  "+precio + " €"+"<br/>");
    document.getElementById("emes").innerHTML=("El mes es "+mes +"<br/>");
    if (mes == "octubre"){
    pfinal = precio*0.85;
    }else{
    pfinal = precio;
    }
    document.getElementById("pfinal").innerHTML=("El precio final es "+pfinal +"<br/>");
}

//Actividad 06

function validar(){
    for(let i=0;i<3; i++){
        let contrasena = prompt("Introduce tu contraseña");
        if(contrasena == "123456"){
            document.getElementById("correcto").innerHTML = ("Bienvenido"+"<br/>");
            break;
        }else{
            document.getElementById("incorrecto").innerHTML=("Contraseña incorrecta"+"<br/>");
        }
    }
}

//Actividad 09

function tabla(){
    let tablaa = document.getElementById("tablas").value;
    let g = 1;
    let j = 1;
    let xtabla = [];
    for(b=0; b<tablaa; b++){
        let h = 1;
        for(i=0; i<10; i++){
            xtabla.push(`${g} x ${h} =  ${j = g * h}<br/>`);
            h++;
        } 
        g++;
    }
    document.getElementById("mtabla").innerHTML = xtabla.join("<br/>");

}
//Actividad 10

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

//Actividad 11

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

//Actividad 12

function comprobar() {
    let operador = document.getElementById("oper").value;
    resultado = eval(operador);
    document.getElementById("resultado").innerHTML="Resultado: "+ resultado;
}

//Actividad 14
function semana() {
    let diasSemana = [" Lunes" ," Martes" ," Miercoles" ," Jueves", " Viernes", " Sábado", " Domingo"];
    document.getElementById("semanas").innerHTML = diasSemana + "<br/>";
}
 
//Actividad 15
function dias() {
    let diasSemana = [" Lunes" ," Martes" ," Miercoles" ," Jueves", " Viernes"];
    let di = document.getElementById(diasSemana);
    for (let i=0; i < diasSemana.length; i++){
    document.getElementById("dia").innerHTML=(i + diasSemana[i] + "</br>");
    }
}

//Actividad 16
function matriz() {
    let matriz = [[1,2,3] , [4,5,6] , [7,8,9]];
    for(n=0 ; n < matriz.length ; n++ ){
        document.getElementById("matri").innerHTML=(matriz[n]+"</br>"); 
    }
}


//Actividad 17

function array(){
    let arr = [];
    arr = document.ario.cadena.value.split(" ");
    document.getElementById("array1").innerHTML=(arr.length + "<br/>");
    document.getElementById("array2").innerHTML=(arr[0] + "<br/>");
    document.getElementById("array3").innerHTML=(arr[arr.length-1] + "<br/>");
}

//Actividad 18

function arrays() {
    let form = [];
    form.push(document.getElementById("codigo").value);

    form.push(document.getElementById("nombre").value);

    form.push(document.getElementById("edad").value);

    form.push(document.getElementById("email").value);

    form.push(document.getElementById("movil").value);

    form.push(document.getElementById("tipos").value);

    document.getElementById("ficha").innerHTML= form.join("<br/>");
}


function backimage1(id){
    document.getElementById(id).style.backgroundImage= "url('img/img2.jpeg')";

}
function backimage2(id){
    document.getElementById(id).style.backgroundImage= "";

}
