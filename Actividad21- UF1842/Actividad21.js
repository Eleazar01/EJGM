

window.addEventListener('load', ()=>{
    var formulario = document.querySelector('#formulario');
    var box_info = document.querySelector('.info');
    box_info.style.display = 'none';

    formulario.addEventListener('submit', function () {
        
        var nombre = document.querySelector('#nombre').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = document.querySelector('#edad').value;
    
            //.trim() para quitar los espacios al inicio y al final del string
            
            // validacion nombre
        if (nombre.trim() == null|| nombre.trim() ==''){
            document.querySelector("#error_nombre").innerHTML='Nombre no válido';
            document.querySelector('#error_nombre').style.color = 'red';
            return false;
        }else{
            document.querySelector("#error_nombre").innerHTML='el nombre es: '+ nombre;
            document.querySelector('#error_nombre').style.color = 'green';
        }
            // validacion apellidos
        if (apellidos.trim() == null|| apellidos.trim() ==''){
            document.querySelector("#error_apellidos").innerHTML='Nombre no válido';
            document.querySelector('#error_apellidos').style.color = 'red';
            return false;
        }else{
            document.querySelector("#error_apellidos").innerHTML='el nombre es: '+ apellidos;
            document.querySelector('#error_apellidos').style.color = 'green';
        }
            //validacion edad
        if (edad == null|| isNaN(edad)|| edad<=0){
            document.querySelector("#error_edad").innerHTML='Nombre no válido';
            document.querySelector('#error_edad').style.color = 'red';
            return false;
        }else{
            document.querySelector("#error_edad").innerHTML='el nombre es: '+ edad;
            document.querySelector('#error_edad').style.color = 'green';
        }

        box_info.style.display = 'block';

        //mostrar ficha
        var i_nombre = document.querySelector('#i_nombre span');
        var i_apellidos = document.querySelector('#i_apellidos span');
        var i_edad = document.querySelector('#i_edad span');
        i_nombre.innerHTML = nombre;
        i_apellidos.innerHTML = apellidos;
        i_edad.innerHTML = edad;

    })


});
