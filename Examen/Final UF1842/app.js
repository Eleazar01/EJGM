
   addEventListener('click', ()=>{
        var alumno = {
            nombre : document.getElementById('nombre').value, 
            email : document.querySelector('#email').value,
            asunto : document.querySelector('#asunto').value,
            mensaje : document.querySelector('#mensaje').value
        }
        localStorage.setItem("alumno", JSON.stringify(alumno));

        var cuerpo = document.getElementById('cuerpo');
        cuerpo.style.color='white';
    }) 
        
    
        

   
    
  