$(document)
.ready(function () {
    $('formulario')
    .submit(function (e) { 
        e.preventDefault();
        var usuario = {
            nombre: $('input[name="nombre"]').val,
            apellidos: $('input[name="apellidos"]').val,
            email: $('input[name="email"]').val,
            edad: $('input[name="edad"]').val,
            url: $('input[name="fotografia"]').val
        }
        $
        .ajax({
            type: "post",
            url: $(this).attr('action'),
            data: usuario,
            beforeSend: function () {
                console.log('Enviando usuario...');
            },
            success: function (respuesta) {
                console.log(respuesta);
            },
            error: function () {
                console.log('A ocurridoun error');
            }, 
            timeout: 1000
        });
        
    });
});