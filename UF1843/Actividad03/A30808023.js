$(document)
.ready(function () {
    
    $( "div" ).draggable();
    
//boton1
    var state = true;
    $( ".button1" ).on( "click", function() {
      if ( state ) {
        $( ".puntos1" )
        .animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
        
        $('#p1')
        .css('visibility', 'visible')
        
      } else {
        $( ".puntos1" )
        .animate({  
            backgroundColor: '#f0f8ff00',
            color: "#000"
        }, 1000 );

        $('#p1')
        .css('visibility', 'hidden')
      }
      state = !state;
    });
    //boton2
    var state = true;
    $( ".button2" ).on( "click", function() {
      if ( state ) {
        $( ".puntos2" )
        .animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
        
        $('#p2')
        .css('visibility', 'visible')
        
      } else {
        $( ".puntos2" )
        .animate({
          backgroundColor: "#f0f8ff00",
          color: "#000",
          width: 240
        }, 1000 );
        $('#p2')
        .css('visibility', 'hidden')
      }
      state = !state;
    });
    //boton3
    var state = true;
    $( ".button3" ).on( "click", function() {
      if ( state ) {
        $( ".puntos3" )
        .animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
        
        $('#p3')
        .css('visibility', 'visible')
        
      } else {
        $( ".puntos3" )
        .animate({
          backgroundColor: "#f0f8ff00",
          color: "#000",
          width: 240
        }, 1000 );
        $('#p3')
        .css('visibility', 'hidden')
      }
      state = !state;
    });
    //boton4
    var state = true;
    $( ".button4" ).on( "click", function() {
      if ( state ) {
        $( ".puntos4" )
        .animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
        
        $('#p4')
        .css('visibility', 'visible')
        
      } else {
        $( ".puntos4" )
        .animate({
          backgroundColor: "#f0f8ff00",
          color: "#000",
          width: 240
        }, 1000 );
        $('#p4')
        .css('visibility', 'hidden')
      }
      state = !state;
    });
    //boton5
    var state = true;
    $( ".button5" ).on( "click", function() {
      if ( state ) {
        $( ".puntos5" )
        .animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
        
        $('#p5')
        .css('visibility', 'visible')
        
      } else {
        $( ".puntos5" )
        .animate({
          backgroundColor: "#f0f8ff00",
          color: "#000",
          width: 240
        }, 1000 );
        $('#p5')
        .css('visibility', 'hidden')
      }
      state = !state;
    });




})

