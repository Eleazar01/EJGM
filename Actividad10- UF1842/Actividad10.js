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
    case "julio" && "agosto" && "octubre"://quita octubre la actividad ponia solo julio y agosto
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

//En enero no me hace el cálculo. Y es porque cuando utilizamos un operador lógico en un case -Booleano- nos cogerá el primer valor o el último dependiendo de si utilizamos OR ó AND. 

//Prueba de esta manera:

/*switch(mes) {
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
        document.write("El precio final es "+pfinal +"<br/>");
        break;
}*/
