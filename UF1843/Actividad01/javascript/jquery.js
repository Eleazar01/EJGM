$(document).ready(function () {

    $('.botona').hover(function () {
        $(this).css('background-color','#00214a');
        $(this).css('color','#cdeae8');
        $(this).css('border-radius','20%');
    },
    function () {
        $(this).css('background-color','#cdeae8');
        $(this).css('color','#00214a');
        $(this).css('border-radius','0%');
    });

    $('.botonp1').hover(function () {
        $(this).css('background-color','#00214a');
        $(this).css('color','#cdeae8');
        $(this).css('border-radius','20%');
    },
    function () {
        $(this).css('background-color','#cdeae8');
        $(this).css('color','#00214a');
        $(this).css('border-radius','0%');
    });
    $('.botonp1').click(function () {
        
    })

    $('#botonp')
    .click(function () {
        $('.profesorEmergente').addClass('active');
    })

    $('.cerrar')
    .click(function () {
        $('.profesorEmergente').removeClass('active');
    })
    

});
// location.reload();