var usuario = prompt("Introduce el usuario: ");
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

