
//carga informacion de inicio

window.addEventListener('load', function informacion() {
    document.querySelector('.contenido').innerHTML = `
        <div>
            <h2>INFORMACION</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus laboriosam quisquam consequuntur cupiditate veritatis molestias labore quibusdam animi neque, quas qui nesciunt! Laudantium necessitatibus recusandae voluptatibus ut aut maxime?</p>
        </div>`
})

//Da el contenido del boton de acceso

document.querySelector("#acceso").addEventListener("click", function acceso() {
    
    document.querySelector('.contenido').innerHTML = `
        <div>
            <form id="formulario" method="post">
            <input type="text" name="usuario id ='usuario'" placeholder="Introduce el usuario"/>
            <input type="password" name="password" id = 'password' placeholder="Introduce la contraseña"/>
            <button id="validar">Acceder</button>
            </form>
        </div>`
});

//Da el contenido del boton de registro

// action="https://reqres.in/api/users"

document.querySelector("#registro").addEventListener("click", function registro() {
    document.querySelector('.contenido').innerHTML = `
        <div>
            <form id="formulario" method="post">
            <input type="text" name="nombre" placeholder="Introduce el nombre"/>
            <input type="text" name="apellidos" placeholder="Introduce los apellidos"/>
            <input type="email" name="email" placeholder="Introduce el correo electronico"/>
            <input type="password" name="password" placeholder="Introduce una contraseña"/>
            <input type="password" name="password2" placeholder="Repite la contraseña"/>
            <input type="number" name="edad" placeholder="Introduce la edad"/>
            <input type="url" name="fotografia" placeholder="Introduce una url de una fotografia"/>
            <button id="guardar">Registrar</button>
            </form>
        </div>`
});

//Da el contenido del boton de informacion

document.querySelector("#informacion").addEventListener("click", function informacion() {
    document.querySelector('.contenido').innerHTML = `
        <div>
            <h2>INFORMACION</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus laboriosam quisquam consequuntur cupiditate veritatis molestias labore quibusdam animi neque, quas qui nesciunt! Laudantium necessitatibus recusandae voluptatibus ut aut maxime?</p>
        </div>`
});

//Da el contenido del boton de curso

document.querySelector("#curso").addEventListener("click", function curso() {
    document.querySelector('.contenido').innerHTML = `
        <div>
            <h2>CURSO</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus laboriosam quisquam consequuntur cupiditate veritatis molestias labore quibusdam animi neque, quas qui nesciunt! Laudantium necessitatibus recusandae voluptatibus ut aut maxime?</p>
        </div>`
});

//Da el contenido del boton de contacto

document.querySelector("#contacto").addEventListener("click", function contacto() {
    document.querySelector('.contenido').innerHTML = `
        <div>
            <h2>CONTACTO</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat temporibus laboriosam quisquam consequuntur cupiditate veritatis molestias labore quibusdam animi neque, quas qui nesciunt! Laudantium necessitatibus recusandae voluptatibus ut aut maxime?</p>
        </div>`
});

var alumno = {
    nombre : 'Eleazar', 
    apellido: 'Gonzalez',
    correo : 'eleazar@gmail.com',
    edad : '15',
    contraseña: '1234',
    avatar:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.adslzone.net%2Fcomo-se-hace%2Fphotoshop%2Fquitar-fondo-imagen%2F&psig=AOvVaw0CSG97WRRv032NwvwHl7og&ust=1692295577376000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDS6M3h4YADFQAAAAAdAAAAABAE'
  }

  // validacion

//   document.querySelector('#validar').addEventListener('click',function () {
//     let validacion =['#usuario','#password'];

//     if (validacion[0] == alumno[0] && validacion[1] == alumno[4]) {
//         document.querySelector('#perfil')
//         .innerHTML(alumno[0]+alumno[1]);

//     } else {
//         document.querySelector('#perfil')
//         .innerHTML('Usuario o Contraseña incorrecta');
//     }

//   })






    

    
