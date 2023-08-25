Entrada de datos(interactuar con el usuario
Formulario
Tendrá 3 formularios: acceso, registro y contacto. 
Acceso, recogerá nombre y contraseña para validar con los usuarios registrados.
Registro, recogerá los datos del cliente: nombre completo,contraseña, correo electrónico,edad, teléfono, dirección y método de pago.
Contacto, formulario para solucionar dudas de los clientes o para recoger sus reclamaciones. Se pedirá nombre de usuario del cliente, correo, un asunto y el contenido del email.
Botones
Tendrá 10 botones, 5 visibles a primera vista y otros dos inyectados. 
Nuestra Tienda, el botón muestra en pantalla información de la empresa, como trabaja y publicita alguno de los productos.
Tienda, el botón muestra en pantalla a la izquierda un filtro que mostrará los productos según unos atributos y una serie de artículos. Si el filtro no tiene nada seleccionado, mostrará todos los productos de la tienda.
Acceso, el botón muestra el formulario de acceso y un botón para validar los datos, al mismo tiempo mostrará un botón para registrarse.
Validar,  Este botón valida los datos recogidos en acceso.
Registrarse, Muestra el formulario de registro y un botón que guarda los datos de registro del usuario.
Registro, Este botón guarda los datos del cliente.
Contacto, muestra el formulario de contacto y el botón para enviar el correo.
Enviar, envía el correo de contacto almacenado en el formulario de contacto.
Confirmar, confirmar el pedido.
Configuración, muestra ajustes de alto contraste.


Cómo procesamos los datos y cómo los transformamos

Almacenar los datos
El formulario de acceso recogerá los datos de usuario y contraseña en un array.
En el formulario de registro se almacenarán los datos en json que se guardarán en el servidor.
Al seleccionar un objeto para comprar se almacenará en un array.
Validación de datos
Se comparará los datos almacenados en el acceso con los de los usuarios registrados para buscar coincidencias.
Proceso de datos
Los datos serán almacenados en el servidor como objetos.
Salida de datos

 ¿Cómo van a salir los datos?
Los productos se mostrarán como imagen de los mismos y al seleccionarlos se marcarán como elegidos
Se mostrará en pantalla los elementos seleccionados por si hay que hacer correcciones y junto a cada uno el tallaje a elegir para el pedido y un botón de confirmación del pedido
