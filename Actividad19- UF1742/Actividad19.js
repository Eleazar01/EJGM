var alumnos = [];
function fichaalumno() {
    let alumno = [];
    alumno.push(document.getElementById("codigo").value);
    
    alumno.push(document.getElementById("nombre").value);
        
    alumno.push(document.getElementById("edad").value);
        
    alumno.push(document.getElementById("email").value);
        
    alumno.push(document.getElementById("movil").value);
        
    alumno.push(document.getElementById("tipos").value);

    alumnos.push(alumno);

    console.log(alumnos);
    
   document.getElementById("resultado").innerHTML = alumnos.join("<br/>");
}
