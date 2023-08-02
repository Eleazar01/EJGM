
    function click() {
        var alumno = {
            nombre : document.querySelector('#nombre'), 
            email : document.querySelector('#email'),
            asunto : document.querySelector('#asunto'),
            mensaje : document.querySelector('#mensaje')
        }
        localStorage.clear();
        localStorage.setItem("alumno", JSON.stringify(alumno));
    }
        

   
    
  