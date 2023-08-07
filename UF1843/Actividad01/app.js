// window.location.reload ()

    var usuarios = [];

    function inicio() {
        document.querySelector('.perfil').innerHTML =`
            <h3>ACCEDE A TU USUARIO</h3>
            <input class="botona" type="button" id="accesoalumno" value="Alumno">
            <input class="botonp1" type="button" id="modal_btn1" value="Profesor">`

        document.querySelector('.cursos').innerHTML=`
            <h4>Nuestros cursos</h4>
            <img src="media/imagen-curso.jpg" alt="">
            <p>Tienes toda la información aquí</p>
            <button onclick="curso()" class="principal">SOLICÍTAR</button>`
    
        document.querySelector('.cuerpo').innerHTML =`
            <h1>Nuestro curso</h1>
            <p>Si necesitas información clica aquí</p>
            <button onclick="contacto()">CONTACTO</button>`
        let back = document.querySelector('.cuerpo');
        back.style.backgroundImage = "url('media/imagen-fondo.png')";
        back.style.backgroundRepeat = "repeat-y";
        back.style.backgroundSize = 'cover'; 

    }
    
    function curso() {
        document.querySelector('.perfil').innerHTML =`
            <h3>Nombre de Usuario</h3>
            <p>Rol</p>`
        
         document.querySelector('.cursos').innerHTML=`
            <h4>Nuestros cursos</h4>
            <img src="media/imagen-curso.jpg" alt="">
            <p>Tienes toda la información aquí</p>
            <button onclick="curso()" class="principal">SOLICÍTAR</button>`
    
        document.querySelector('.cuerpo').innerHTML =`
            <div>
                <video src="media/VideoClase.mp4" controls></video>
            </div>
            <p>Si te interesa este curso contactanos</p>`
    
        let back = document.querySelector('.cuerpo');
        back.style.backgroundImage = "url('media/imagen-curso.jpg')";
        back.style.backgroundRepeat = "repeat-y";
        back.style.backgroundSize = 'cover'; 
    }
    
    function contacto() {
        document.querySelector('.perfil').innerHTML =`
            <h3>Nombre de Usuario</h3>
            <p>Rol</p>`
    
        document.querySelector('.cursos').innerHTML=`
        <h4>Nuestros cursos</h4>
            <img src="media/imagen-curso.jpg" alt="">
            <p>Tienes toda la información aquí</p>
            <button onclick="curso()" class="principal">SOLICÍTAR</button>`
    
        document.querySelector('.cuerpo').innerHTML=`
            <form action="">
                <input type="text" placeholder="Nombre" id="nombre">
    
                <input type="email" placeholder="Corre electronico" id="email">
    
                <input type="text" placeholder="asunto" id="asunto">
    
                <input type="text" placeholder="mensaje" id="mensaje">
    
                <button onclick="formulario()">ENVIAR</button>
                <p></p>
            </form>
    
        <!-- legal -->
    
        <div class="legal">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis officia unde architecto ut ipsum, quisquam omnis nulla id adipisci delectus excepturi cumque deserunt odit error illo aut quas, nemo consequatur.</p> 
        </div>`
        let back = document.querySelector('.cuerpo');
        back.style.backgroundImage = "url('media/imagen-fondo.png')";
        back.style.backgroundRepeat = "repeat-y";
        back.style.backgroundSize = 'cover'; 
    
    }
       
    
    function formulario() {
        var ficha = {
            nombre : document.querySelector('#nombre').value, 
            email : document.querySelector('#email').value,
            asunto : document.querySelector('#asunto').value,
            mensaje : document.querySelector('#mensaje').value
        }
        usuarios.push(ficha);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
        // if (ficha[nombre] == ''||ficha[email] == ''||ficha[asunto] == ''||ficha[mensaje] == '') {
        //     mensaje.classList.add('LlenarCampos')
        //     setTimeout(() => {
        //        mensaje.classList.remove('LlenarCampos')
        //     }, 5000)
        // } else {
            
        // }
         
    } 
