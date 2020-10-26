const mainbtn = document.querySelector('.mainbar__menubtn');
const mainmenu = document.querySelector('.mainbar__menu');
const mainlinks = document.querySelector('.mainbar__links');


mainbtn.addEventListener('click', ()=> {
    mainmenu.classList.toggle('active');
    mainlinks.classList.toggle('active');
});



$( document ).ready( function() {
    $( window ).scroll( function() {
      if ( $( this ).scrollTop() > 200 ) {
        $( '.top' ).fadeIn();
      } else {
        $( '.top' ).fadeOut();
      }
    } );
    $( '.top' ).click( function() {
      $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
      return false;
    } );
  } );


function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}