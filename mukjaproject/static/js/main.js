const mainbtn = document.querySelector('.mainbar__menubtn');
const mainmenu = document.querySelector('.mainbar__menu');
const mainlinks = document.querySelector('.mainbar__links');

const sortbtn = document.querySelector('.sectionbar__sortbtn');
const sortbtnmenu = document.querySelector('.sortbtn__menu');

const gridbtn = document.querySelector('.sectionbar__gridbtn');
const mapbtn = document.querySelector('.sectionbar__mapbtn');


mainbtn.addEventListener('click', ()=> {
    mainmenu.classList.toggle('active');
    mainlinks.classList.toggle('active');
});

gridbtn.addEventListener('click', () => {
    gridbtn.classList.toggle('active')
})

mapbtn.addEventListener('click', ()=> {
    mapbtn.classList.toggle('active')
})

sortbtn.addEventListener('click', ()=> {
    sortbtnmenu.classList.toggle('active');
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


