$('html').on("windowResize",function(event,h,w){
	loginVerticalMiddle(h,w);
});

var const_height = 0;

var loginVerticalMiddle = function(h,w){
	device.em();
	var $login = $('#login')
	,	$recover = $('#recover')
	;
	var	$loginWidth = $login.width()
	,	$loginHeight = $login.height()
	,	$loginMarginTop = (h-$loginHeight)/2
	,	$recoverWidth = $recover.width()
	,	$recoverHeight = $recover.height()
	,	$recoverMarginTop = (h-$recoverHeight)/2
	;
	$login.css('padding-top',$loginMarginTop);
	$recover.css('padding-top',$loginMarginTop);
}

$(window).load(function(){ 
	loginVerticalMiddle(device.win.h,device.win.w);
	$('meta[name="theme-color"]').attr('content',$('body').css('background-color'));
	setTimeout(function(){
		$('.container').css('visibility','visible');
		$('.cs-loader').css('display','none');
	},1000);
});

