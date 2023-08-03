

function inicio() {
    document.querySelector('.perfil').innerHTML =`
    <div class="perfil">
        <h3>ACCEDE A TU USUARIO</h3>
        <input class="button" type="button" id="accesoalumno" value="Alumno">
        <input class="button" type="button" id="accesoprofesor" value="Profesor">
    </div>
    `
    document.querySelector('.cuerpo').innerHTML =`
    <div class="cuerpo">
        <h1>Nuestro curso</h1>
        <p>Si necesitas información clica aquí</p>
        <button onclick="contacto()">CONTACTO</button>
    </div>
    
    ` 
}

function curso() {
    document.querySelector('.perfil').innerHTML =`
    <div class= "perfil">
            <h3>Nombre de Usuario</h3>
            <p>Rol</p>
    </div>
    `
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
    document.querySelector('.perfil').innerHTML =`
    <div class="perfil">
        <h3>Nombre de Usuario</h3>
        <p>Rol</p>
    </div>
    `
    document.querySelector('.cuerpo').innerHTML=`
    <div class="cuerpo">
        <form action="">
            <input type="text" placeholder="Nombre" id="nombre">

            <input type="email" placeholder="Corre electronico" id="email">

            <input type="text" placeholder="asunto" id="asunto">

            <input type="text" placeholder="mensaje" id="mensaje">

            <button onclick="formulario()">ENVIAR</button>
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
    var ficha = {
        nombre : document.querySelector('#nombre').value, 
        email : document.querySelector('#email').value,
        asunto : document.querySelector('#asunto').value,
        mensaje : document.querySelector('#mensaje').value
    }


    if (ficha[nombre] == ''||ficha[email] == ''||ficha[asunto] == ''||ficha[mensaje] == '') {
        mensaje.classList.add('LlenarCampos')
        setTimeout(() => {
           mensaje.classList.remove('LlenarCampos')
        }, 5000)
    } else {
        localStorage.setItem("alumno", JSON.stringify(ficha));
    }
     
} 

