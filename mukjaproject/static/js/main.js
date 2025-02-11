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


// from here for isotope
// for filtering
var $grid_view = $(".grid_view").isotope({
  itemSelector: '.grid_view-item',
  layoutMode: 'fitRows',
  getSortData: {
    store_name: '.store_name',
    distance: '.distance parseInt',
    // sortAscending: false,
    score: '.score parseInt',
  },
  sortAscending: {
    store_name: true,
    distance: true,
    score: false
  }
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
  $filterGroup.find('#tag_reset').removeClass('is-checked');
    // $filterGroup.find('.is-checked').removeClass('is-checked');
    var $button = $( event.currentTarget );
    if ( $button.attr( 'class' ).indexOf('is-checked') < 0) {
      $button.addClass('is-checked');
      if ( $button.attr( 'id' ) == 'tag_reset') {
        filterValue = "";
        $filterGroup.find('.is-checked').removeClass('is-checked');
        $button.addClass('is-checked');
        $grid_view.isotope({ filter:filterValue });
      }
    } else {
      $button.removeClass('is-checked');
    };
  });
});

function concatValues( obj ) {
  var valueString = filterValue;
  var valueList = []
  for ( var prop in obj ) {
    if ( valueString == "" ) {
      valueString = obj[prop];
      return valueString;
    } else {
        valueList = valueString.split(',');
        var temp_index = valueList.indexOf( obj[prop], 0 );
        if ( temp_index < 0 ) {
          valueList.push( obj[prop] );
        } else {
          valueList.splice(temp_index, 1);
        };
    };
  };
  valueString = valueList.join(',');
  return valueString;
};

// external js: isotope.pkgd.js


// for sorting
// init Isotope

// bind sort button click
$('.sort-by-button-group').on( 'click', 'button', function() {
  var sortValue = $(this).attr('data-sort-value');
  $grid_view.isotope({ sortBy: sortValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
