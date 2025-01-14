//= "../"
$(function(){
    let closeMenu = $( ".close" );
    $( closeMenu ).hide();
    $( ".menu" ).hide();
    $( ".hamburger" ).click(function() {
		console.log('click');
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( closeMenu ).show();
        });
    });

    $( closeMenu ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( closeMenu ).hide();
            $( ".hamburger" ).show();
        });
    });


  
});