
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
            <form action="https://reqres.in/api/users" id="formulario" method="post">
            <input type="text" name="usuario" placeholder="Introduce el usuario"/>
            <input type="password" name="password" placeholder="Introduce la contraseña"/>
            <input type="submit" value="Validar">
            </form>
        </div>`
});

//Da el contenido del boton de registro

document.querySelector("#registro").addEventListener("click", function registro() {
    document.querySelector('.contenido').innerHTML = `
        <div>
            <form action="https://reqres.in/api/users" id="formulario" method="post">
            <input type="text" name="nombre" placeholder="Introduce el nombre"/>
            <input type="text" name="apellidos" placeholder="Introduce los apellidos"/>
            <input type="email" name="email" placeholder="Introduce el correo electronico"/>
            <input type="password" name="password" placeholder="Introduce una contraseña"/>
            <input type="password" name="password2" placeholder="Repite la contraseña"/>
            <input type="number" name="edad" placeholder="Introduce la edad"/>
            <input type="url" name="fotografia" placeholder="Introduce una url de una fotografia"/>
            <input type="submit" value="Registrar">
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






    

    
