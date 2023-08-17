
//carga informacion de inicio

var perfiles = [];
var perfil = {};



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
            <form id="formulario">
            <input type="text" name="usuario" id ='usuario' placeholder="Introduce el usuario"/>
            <input type="password" name="password" id = 'password' placeholder="Introduce la contraseña"/>
            <button id="validar">Acceder</button>
            </form>
        </div>`;

    // validación

    document.querySelector('#validar').addEventListener('click', function (e) {
        e.preventDefault();

        let nombre = "Manuel";
        let password = 'admin';

        let nombrev = document.querySelector('#usuario').value;
        let passwordv = document.querySelector('#password').value;
        if (nombrev == ''|| nombrev == null) {
            document.querySelector('#perfil').innerHTML = `<p>Debes rellenar el campo`;
        } else {
            if (nombre == nombrev && password == passwordv) {
                document.querySelector('#perfil').append(nombre);
            } else {
                document.querySelector('#perfil').innerHTML = `<p>Nombre de usuario o contraseña incorrecto</p>`;
            } 
        }
        

    });

});

// document.querySelector('#perfil').innerHTML = `<p>Profesor</p><br><p>1º A</p>`; 

//Da el contenido del boton de registro

// action="https://reqres.in/api/users"

document.querySelector("#registro").addEventListener("click", function registro() {
    document.querySelector('.contenido').innerHTML = `
        <div>
            <form id="formulario">

                <input type="text" name="nombre" id ='nombrer' placeholder="Introduce el nombre"/>

                <input type="text" name="apellidos" id ='apellidor' placeholder="Introduce los apellidos"/>

                <input type="email" name="email" id ='emailr' placeholder="Introduce el correo electronico"/>

                <input type="password" name="password" id ='passwordr' placeholder="Introduce una contraseña"/>

                <input type="password" name="password2" placeholder="Repite la contraseña"/>

                <input type="number" name="edad" id ='edadr' placeholder="Introduce la edad"/>

                <input type="url" name="fotografia" id ='avatarr' placeholder="Introduce una url de una fotografia"/>

                <button id="guardar">Registrar</button>

            </form>
        </div>`

        document.querySelector('#guardar').addEventListener('click', function (e) {
            e.preventDefault();
            perfil = {
                nombre : document.querySelector('#nombrer').value,

                apellidos : document.querySelector('#apellidor').value,

                email :document.querySelector('#emailr').value,

                contra :document.querySelector('#passwordr').value,

                edad :document.querySelector('#edadr').value,

                avatar : document.querySelector('#avatarr').value
            }

            perfiles.push(perfil);

            localStorage.setItem('Perfiles', JSON.stringify(perfiles));

        })


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







    

    
