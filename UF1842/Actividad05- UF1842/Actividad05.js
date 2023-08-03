var precio = parseInt(prompt("Escribe el importe de la compra"));
var mes = (prompt("Introduce el mes"));
var pfinal= 0;
document.write("El precio es  "+precio + " €"+"<br/>");
document.write("El mes es "+mes +"<br/>");
if (mes == "octubre"){
    pfinal = precio*0.85;
}else{
    pfinal = precio;
}
document.write("El precio final es "+pfinal +"<br/>");