    for(var i=0;i<3; i++){
        var contraseña = prompt("Introduce la contraseña");

        if(contraseña=="123456"){
            document.write("Es correcto");
            break;
        }else{
            alert("Vuelve a Intentarlo");
        }
    }
