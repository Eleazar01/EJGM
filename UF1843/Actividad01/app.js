// window.location.reload ()

    var usuarios = [];

    function inicio() {
        document.querySelector('.perfil').innerHTML =`
            <h3>ACCEDE A TU USUARIO</h3>
            <input class="botona" type="button" id="accesoalumno" value="Alumno">
            <input class="botonp1" type="button" id="accesoprofesor1" value="Profesor">`

        document.querySelector('.cursos').innerHTML=`
            <h4>Nuestros cursos</h4>
            <img src="media/imagen-curso.jpg" alt="">
            <p>Tienes toda la información aquí</p>
            <button onclick="curso()" class="principal">SOLICÍTAR</button>`
    
        document.querySelector('.cuerpo').innerHTML =`
            <h1>Nuestro curso</h1>
            <p>Si necesitas información clica aquí</p>
            <button onclick="contacto()">CONTACTO</button>
            
            <div class="app">
    
        <div class="card" style="width: 18rem;">
          <img src="media/12291040_Wavy_Tech-19_Single-09.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Servicio de Asistencia Premium</h5>
            <p class="card-text">Nuestro servicio de Asistencia Premium consiste en:</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Asistencia 24/7</li>
            <li class="list-group-item">Móvil de sustitución</li>
            <li class="list-group-item">Migración de Datos</li>
          </ul>
          <div class="card-body">
            <button id="botonp1">Abrir modal 1</button>
            <button id="botonp2">Abrir modal 2</button>
          </div>
    
          <div id="modal_container"></div>
            `
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


    //VENTANA MODAL

    const modal_container = document.getElementById("modal_container")
    const modal_btn1 = document.getElementById("botonp1")
    const modal_btn2 = document.getElementById("botonp2")

      createModal(`
        <h3 class="modal-title">Abrir modal Emergente</h3>
        <img class="modal-img" src="media/7498232_33144.jpg" alt="">
        <p class="modal-description">Hola modal emergente</p>
        <button class="modal-btn">Contratar</button>
        <a href="#" target="_blank" rel="noopener noreferrer" class="modal-link">Link</a>
      `, "modal-aparecer")

    modal_btn1.addEventListener("click", () => {
      createModal(`
        <h3>Abrir modal 1</h3>
        <img src="media/7498232_33144.jpg" alt="">
        <a href="#" target="_blank" rel="noopener noreferrer">Contratar !!</a>
      `, "modal-desdeArriba")
    })

    modal_btn2.addEventListener("click", () => {
        createModal(`
        <h3>Abrir modal 2</h3>
        <img src="media/7498232_33144.jpg" alt="">
        <a href="#" target="_blank" rel="noopener noreferrer">Contratar !!</a>
      `,"modal-desdeAbajo" )
    })

    const createModal = (content = "sin contenido", style = "") => {
      modal_container.innerHTML = `
        <div class="modal" id="modal">
          <div class="modal-content ${style}">
            ${content}
            <button class="modal-btn-closed" id="modal_btn_closed">x</button>
          </div>
        </div>
      `

      document.getElementById("modal").addEventListener("click", (e) => {
        console.log(e.target.id)
        if (e.target.id === "modal" || e.target.id === "modal_btn_closed") {
          modal_container.innerHTML = ""
        }
      })
    }



