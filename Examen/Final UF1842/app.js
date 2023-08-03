
function inicio() {
    document.querySelector('.cuerpo').innerHTML =`
    <div class="cuerpo">
    <h1>Nuestro curso</h1>
    <p>Si necesitas información clica aquí</p>
    <button>CONTACTO</button>
    </div>
    ` 
}

function curso() {
    document.querySelector('.cuerpo').innerHTML =`
    <div class= "cuerpo">
    <div>
       <video src="media/VideoClase.mp4" controls></video>
    </div>
    <p>Si te interesa este curso contactanos</p>
    </div>
    `
}

function contacto() {
    document.querySelector('.cuerpo').innerHTML=`
    <div class="cuerpo">
        <form action="">
            <input type="text" placeholder="Nombre" id="nombre">

            <input type="email" placeholder="Corre electronico" id="email">

            <input type="text" placeholder="asunto" id="asunto">

            <input type="text" placeholder="mensaje" id="mensaje">

            <button onclick="click()">ENVIAR</button>
            <p></p>
        </form>
    </div>

    <!-- legal -->

    <div class="legal">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis officia unde architecto ut ipsum, quisquam omnis nulla id adipisci delectus excepturi cumque deserunt odit error illo aut quas, nemo consequatur.</p> 
    </div>
    `
    
}
   

function formulario() {
    var alumno = {
        nombre : document.getElementById('#nombre').value, 
        email : document.querySelector('#email').value,
        asunto : document.querySelector('#asunto').value,
        mensaje : document.querySelector('#mensaje').value
    }
    localStorage.setItem("alumno", JSON.stringify(alumno));
}
    

    // var cuerpo = document.getElementById('cuerpo');
    // cuerpo.style.color='blue';   

