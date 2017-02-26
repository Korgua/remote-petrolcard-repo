$(document).ready(function() {
	var $login_button = $('a.login.button');
	$login_button.on('click',function(){
		//var response = grecaptcha.getResponse()
		var	$username = $('.username')
		,	$password = $('.password')
		,	$error = {
						'name' 		: false,
						'pass' 		: false
						//'captcha'	: false
					};
		;

		$username.on('focus',function(){
			$(this).removeClass('error');
			$('html').trigger('emptyNotification',['login-validation']);
			$error.name = false;
		});
		$password.on('focus',function(){
			$(this).removeClass('error');
			$('html').trigger('emptyNotification',['login-validation']);
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
		/*if(response.length===0)
			$error.captcha = true;*/
		if(!$error.pass && !$error.name){//} && !$error.captcha){
			console.log('success');
		}
			else {
				if($error.pass || $error.name){
					$('html').trigger('notification',['login-validation','A név és jelszó megadása kötelező',5000]);
				}
				/*if($error.captcha){
					$('html').trigger('notification',['login-validation-captcha','Lehet, hogy robot vagy?',10000]);
				}*/
			}
	});
});

