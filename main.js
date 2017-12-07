jQuery(document).ready(function($) {

    $('#main').css("filter", "blur(3px)");
    $('#start').modal('show');
    $('#continue').bind("click", callPin);

    $('#mobile').mask('+9-(999)-999-99-99');
    $('#inputPin').mask('9 9 9 9');

    function callPin(event) {
    	$('.modal').modal('hide');

    	setTimeout(function () {
    		$('#pinModal').modal('show');
    	}, 400);
	    
	}

	$('#confirm').on('click', function () {
		$('.modal').modal('hide');
	});

	$('#pinModal').on('hide.bs.modal', function() {
	    $('#main').css("filter", "blur(0)");
	});

});



