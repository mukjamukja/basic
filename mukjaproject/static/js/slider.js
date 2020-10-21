
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 1000,
        values: [ 0, 800 ],
        slide: function( event, ui ) {
            $( "#distance" ).val( ui.values[ 0 ] + "M - " + ui.values[ 1 ] + "M");
        }
        });
            $( "#distance" ).val( $( "#slider-range" ).slider( "values", 0 ) +
            "M - " + $( " #slider-range" ).slider( "values", 1 ) + "M" );
        } );
