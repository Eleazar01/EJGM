var precio = parseInt(prompt("Escribe el importe de la compra"));
var mes = (prompt("Introduce el mes"));
var pfinal= 0;
var dato = "";

document.write("El precio es  "+precio + " €"+"<br/>");
document.write("El mes es "+mes +"<br/>");
mes = mes.toLowerCase;

switch(mes) {
    case enero || febrero:
        pfinal = precio*0.20;
        dato = "El precio final es "+pfinal +"<br/>";
    break;
    case julio || agosto:
        pfinal = precio*0.15;
        dato = "El precio final es "+pfinal +"<br/>";
    break;
    case noviembre || diciembre:
        pfinal = precio*0.25;
        dato = "El precio final es "+pfinal +"<br/>";
    default:
        pfinal = precio;
        dato = "El precio final es "+pfinal +"<br/>";
        break;
}