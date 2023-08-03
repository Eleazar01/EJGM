document.write("¿Tienes el titulo de bachiller?"+"<br/>");
var bachiller = prompt("¿Tienes el titulo de bachiller?");
document.write(bachiller+"<br/>");
if (bachiller == "si"){
    document.write("Puedes acceder al grado superior");
}else{
    document.write("¿Tienes la prueba de acceso superada?"+"<br/>");
    var prueba = prompt("Tienes la prueba de acceso superada");
    document.write(prueba+"<br/>");
    if(prueba =="si"){
        document.write("Puedes acceder al gado superior");
    }else{
        document.write("No puedes acceder al grado superior");
    }
}