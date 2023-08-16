$(document)
.ready(function () {

  //crea el acordeon del aside
  $( "#accordion" )
  .accordion({
    collapsible: true
  });

  //Tema principal

  $('#color1')
  .click(function () {
    $(':root')
    .css({'--fondo': '#484857e9','--detalle': '#c2d07c','--letra': '#c1bfbd','--cabeceras': '#03376e'})

    $('*')
    .css('font-size','1em');
  });

  //Tema azul

  $('#color2')
  .click(function () {
    $(':root')
    .css({'--fondo': '#090774','--detalle': '#403e48','--letra': '#a8a8a8','--cabeceras': '#755ed4'})

    $('*')
    .css('font-size','1em');
  });

  //Tema gris

  $('#color3')
  .click(function () {
    $(':root')
    .css({'--fondo': '#4a4a4a','--detalle': '#313131','--letra': '#cecece','--cabeceras': '#575252'})

    $('*')
    .css('font-size','1em');
  });

  //Tema altocontraste

  $('#color4')
  .click(function () {
    $(':root')
    .css({'--fondo': '#000000','--detalle': '#181515','--letra': '#ffffff','--cabeceras': '#181515'});

    $('*')
    .css('font-size','1.2em');
  });
});
 