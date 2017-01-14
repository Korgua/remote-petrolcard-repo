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
	//$("#dimension").text(w+'x'+h+'| marginTop: '+$marginTop+'| loginHeight: '+$loginHeight);
	/*if(const_height != $loginHeight && const_height!=0)
		const_height = $loginHeight;
		else*/
			$login.css('margin-top',$loginMarginTop);
	//console.log($('div.one-third.column').outerHeight(true));
}

$(window).load(function(){ 
	loginVerticalMiddle(device.win.h,device.win.w);
	$('meta[name="theme-color"]').attr('content',$('body').css('background-color'));
});


console.log("alma");

/*
199
223
---
14


420
248
---
172
*/