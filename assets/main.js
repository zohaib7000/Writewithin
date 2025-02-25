$(document).ready(function(){
	$('.keyboard_mode').on('click', function(){
		var crnt = this;
		if ( $(crnt).hasClass('keyboard_mode_day') ) 
		{
			$.ajax({
				url     : "index.php/Main/mode_changer",
				cache   : false,
				method  : 'post',
				data    : {
					dark_mode : 'dark_mode',
				},
				success: function(response)
				{
					$(crnt).removeClass('keyboard_mode_day');
					$(crnt).addClass('keyboard_mode_night');
					$('body').addClass('dark_mode');
				}
			});
		}
		else
		{
			$.ajax({
				url     : "index.php/Main/mode_changer",
				cache   : false,
				method  : 'post',
				data    : {
					dark_mode : '0',
				},
				success: function(response)
				{
					$(crnt).removeClass('keyboard_mode_night');
					$(crnt).addClass('keyboard_mode_day');
					$('body').removeClass('dark_mode');
				}

			});
		}
	});
    
});



