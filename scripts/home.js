$(document).ready( function() {

  var $head = $( '#header' );
  $( '.ha-waypoint' ).each( function(i) {
    var $el = $( this ),
      animClassDown = $el.data( 'animateDown' ),
      animClassUp = $el.data( 'animateUp' );

    $el.waypoint( function( direction ) {
      if( direction === 'down' && animClassDown ) {
        $head.attr('class', 'header-wrapper header ' + animClassDown);
      }
      else if( direction === 'up' && animClassUp ){
        $head.attr('class', 'header-wrapper header ' + animClassUp);
      }
    });
    var pathname = window.location.pathname; 
    if ( pathname == "/") {
      $("body").addClass("home");
    }


    console.log("hello?");
  });


  $('.carousel').carousel();

});