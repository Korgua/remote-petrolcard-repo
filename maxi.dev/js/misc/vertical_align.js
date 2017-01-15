$('html').on("windowResize",function(event,h,w){
	loginVerticalMiddle(h,w);
});

var const_height = 0;

var loginVerticalMiddle = function(h,w){
	device.em();
	var $login = $('#login')
	,	$form = $('form.login')
	;
	var	$loginWidth = $login.width()
	,	$loginHeight = $login.height()
	,	$loginMarginTop = (h-$loginHeight)/2
	;
	console.log("h: "+h+", margin-top: "+$loginMarginTop);
			$login.css('padding-top',$loginMarginTop);
}

$(window).load(function(){ 
	loginVerticalMiddle(device.win.h,device.win.w);
	$('meta[name="theme-color"]').attr('content',$('body').css('background-color'));
	setTimeout(function(){
		$('.container').css('visibility','visible');
		$('.cs-loader').css('display','none');
	},1000);
});

