$(document)
.ready(function () {
    const boton = $('#contraste');
    var contraste = true;

    boton
    .click(function () {
        

        let fondo = $('#seccion3');

        if (!contraste) {
            $('body')
            .css('background-color', 'white');

            $('header a')
            .css('color', 'black')
            .css('font-size','16px');

            $(fondo)
            .css('background-color', '#00676c')
            .css('font-size','16px');

            $('#principal div')
            .css('font-size','16px');

            $('#seccion2')
            .css('color','black')
            .css('font-size','16px');
            contraste = true;

        } else {
            $('body')
            .css('background-color', 'black');
    
            $('header a')
            .css('color', 'white')
            .css('font-size','1em');
            
            $(fondo)
            .css('background-color', 'black')
            .css('font-size','1.5em');

            $('#principal div')
            .css('font-size','16px')
    
            $('#seccion2')
            .css('color','white')
            .css('font-size','1em');
            contraste = false;
        }
             
    })
    
    $(function() {
        $("#seccion3").accordion({
            collapsible: true,
            heightStyle: "content"
        });
      });

    $( function() {
        $( document ).tooltip();
    } );
       
});