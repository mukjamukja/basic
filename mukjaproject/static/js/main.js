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

// from here for sorting (isotope)
// init Isotope
// var $grid_view = $('.grid_view').isotope({
//   itemSelector: '.grid_view-item',
//   getSortData: {
//     score: '.score',
//     distance: '.distance',
//     score: '.score parseInt',
//     tag: '[data-tag]',
//   };
// });


// external js: isotope.pkgd.js

// // init Isotope
// var $grid = $('.grid').isotope({
//   itemSelector: '.color-shape'
// });

// // store filter for each group
// var filters = {};

// $('.filters').on( 'click', '.button', function( event ) {
//   var $button = $( event.currentTarget );
//   // get group key
//   var $buttonGroup = $button.parents('.button-group');
//   var filterGroup = $buttonGroup.attr('data-filter-group');
//   // set filter for group
//   filters[ filterGroup ] = $button.attr('data-filter');
//   // combine filters
//   var filterValue = concatValues( filters );
//   // set filter for Isotope
//   $grid.isotope({ filter: filterValue });
// });

// // change is-checked class on buttons
// $('.button-group').each( function( i, buttonGroup ) {
//   var $buttonGroup = $( buttonGroup );
//   $buttonGroup.on( 'click', 'button', function( event ) {
//     $buttonGroup.find('.is-checked').removeClass('is-checked');
//     var $button = $( event.currentTarget );
//     $button.addClass('is-checked');
//   });
// });
  
// // flatten object by concatting values
// function concatValues( obj ) {
//   var value = '';
//   for ( var prop in obj ) {
//     value += obj[ prop ];
//   }
//   return value;
// }

// init isotope

var $grid_view = $(".grid_view").isotope({
  itemSelector: '.grid_view-item'
});
var filters = {};
var filterValue = "";

$('.filters').on('click', '.button', function( event ){
  var $button = $( event.currentTarget );

  var $tagFilter = $button.parents('.tag_filter');
  var filterGroup = $tagFilter.attr('data-filter-group');
  filters[ filterGroup ] = $button.attr('data-filter');
  // change concatValues function to add and sub value
  filterValue = concatValues( filters );
  $grid_view.isotope({ filter: filterValue });
});

$('.tag_filter').each( function( i, filterGroup ) {
  var $filterGroup = $( filterGroup );
  $filterGroup.on( 'click', 'button', function ( event ) {
  $filterGroup.find(id='tag_reset').removeClass('is-checked');
    // $filterGroup.find('.is-checked').removeClass('is-checked');
    var $button = $( event.currentTarget );
    if ( $button.attr( 'class' ).indexOf('is-checked') < 0) {
      $button.addClass('is-checked');
    } else {
      $button.removeClass('is-checked');
    };
  });
});

function concatValues( obj ) {
  var value = filterValue;
  for ( var prop in obj ) {
    if ( value.indexOf( ',' + obj[prop] ) < 0 ) {
      value += ',' + obj[prop];
    } else {
      value = value.replace(',' + obj[prop], '');
    }
    // value += obj[ prop ];
  };
  return value;
};