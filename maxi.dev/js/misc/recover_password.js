$(document).ready(function(){
	$(".recover-password").on('click',function(){
		$('#login').addClass('fade-left');
		setTimeout(function(){
			$('#login').removeClass('fade-left').addClass('hidden');
			$('#recover').removeClass('hidden').addClass('fade-from-right');
		},400);
		setTimeout(function(){
			$('#recover').removeClass('fade-from-right');
		},900);
	})



});