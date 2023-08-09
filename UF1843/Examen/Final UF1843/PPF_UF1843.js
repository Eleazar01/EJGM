$(document)
.ready(function () {

    // boton1
    var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 450
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#00000000",
          color: "#000",
          width: 400
        }, 1000 );
      }
      state = !state;
    });

    // boton2

    $( "#button2" ).on( "click", function() {
        $( "#effect2" )
        .css("background-image", "url(media/avatar1.jpg)")
        .css("background-size", "cover")
        
      });
   

    //   boton3

    $( "#button3" ).on( "click", function() {
        $( "#effect3" )
        .animate({
            marginTop: 50,
            marginLeft: 40
        }, 800 );
      });
   

    //   boton4
        
    $( "#button4" ).on( "click", function() {
        $( ".newClass4" ).switchClass( "newClass4", "anotherNewClass", 1000 );
        $( ".anotherNewClass" ).switchClass( "anotherNewClass", "newClass4", 1000 );
      });

    //   boton5

    $( "#button5" ).on( "click", function() {
        $( "#effect5" ).toggleClass( "div", 1000 );
      });

    //   boton6

    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Llegó!" );
      }
    });

    //   boton7

    var state = true;
    $( "#button7" ).on( "click", function() {
      if ( state ) {
        $( "#effect7" ).animate({
            backgroundColor: "#aa0000",
            color: "#fff",
            width: 300,
            marginTop: 50,
            marginLeft: 40
        }, 2000 );
      } else {
        $( "#effect7" ).animate({
            backgroundColor: "#00000000",
            color: "#000",
            width: 240,
            marginTop: 0,
            marginLeft: 150
        }, 2000 );
      }
      state = !state;
    });

    //   boton8

    $( "#button8" ).on( "click", function() {
        $( "#effect8" )
        .animate({
            backgroundColor: 'yellow',
            width: 200
        }, 4500 );
      });


    //   boton9

    $( "#draggable9" ).draggable();
    $( "#droppable9" ).droppable({
      drop: function( event, ui ) {
        $( this )
            .addClass( "ui-state-highlight" )
            .find( "p" )
            .css("background-image", "url(media/avatar2.jpg)")
            .css("background-size", "cover")
      }
    });

    //   boton10

    $( "#button10" ).on( "click", function() {
        $( "#effect10" )
        .animate({
            marginTop:100,
            marginLeft: 150
        }, 2000 );
      });
   
    //   boton11

    $( "#button11" ).on( "click", function() {
        $( ".newClass11" ).switchClass( "newClass11", "anotherNewClass11", 1000 );
        $( ".anotherNewClass11" ).switchClass( "anotherNewClass11", "newClass11", 1000 );
      });

    //   boton12

    $( "#button12" ).on( "click", function() {
        $( "#effect12" ).toggleClass( "div", 5000 );
      });

})