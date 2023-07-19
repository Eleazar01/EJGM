var precio = parseInt(prompt("Escribe el importe de la compra"));
var mes = prompt("Introduce el mes");
var pfinal= 0;
document.write("El precio es  "+precio + " €"+"<br/>");
document.write("El mes es "+mes +"<br/>");

mes = (mes.toLowerCase());

switch(mes) {
    case "enero" && "febrero":
        pfinal = precio*0.80;
        document.write("El precio final es "+pfinal +"<br/>");
        break;
    case "julio" && "agosto" && "octubre":
        pfinal = precio*0.85;
        document.write("El precio final es "+pfinal +"<br/>");
        break;
    case "noviembre" && "diciembre":
        pfinal = precio*0.75;
        document.write("El precio final es "+pfinal +"<br/>");
        break;
    default:
        pfinal = precio;
        document.write("El precio final es "+pfinal +"<br/>");
        break;
}