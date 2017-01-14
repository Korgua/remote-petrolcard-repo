$(document).ready(function() {
	var $login_button = $('a.login.button');
	$login_button.on('click',function(){
		var $username = $('.username')
		,	$password = $('.password')
		,	$error = {
						'name' : false,
						'pass' : false
					};
		;

		$username.on('focus',function(){
			$(this).removeClass('error');
			$('html').trigger('emptyNotification');
			$error.name = false;
		});
		$password.on('focus',function(){
			$(this).removeClass('error');
			$('html').trigger('emptyNotification');
			$error.pass = false;
		});


		if(!$username.val().length){
			$username.addClass('error');
			$error.name = true;
		}
		if(!$password.val().length){
			$password.addClass('error');
			$error.pass = true;
			}
		if(!$error.pass && !$error.name)
			console.log('success');
			else if($error.pass && $error.name){
				$('html').trigger('notification',['A név és jelszó megadása kötelező',5000]);
			}
			else if($error.pass && !$error.name){
				$('html').trigger('notification',['A jelszó megadása kötelező',5000]);
			}
			else{
				$('html').trigger('notification',['A név megadása kötelező',5000]);
			}
	});
});

