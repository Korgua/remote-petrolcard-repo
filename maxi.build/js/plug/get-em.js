

// ========================================================================
// 	R E S P   	-	a  n i f t y   l i t t l e    h e l p e r    p l u g i n
// ========================================================================

var device = (function(){

	var	VERBOSE 		= true,
		EVENTS	 	= true,

		REM 			= $(".one-em-dummy").width() || prep(),
		TARGET 		= $("html"),
		win			= null,
		width_in_rem		= null,
		category 		= null,
		previous_category	= null,
		handheld 		= null
	;


	function log(a,b,c){
		if ( VERBOSE ) lg(a,b,c);
	}
	function prep(){
		$("body").prepend("<div class= 'one-em-dummy' style='width:1rem; height:1px, display:none'></div>");
		log("em dummy planted in html","+");
		return $(".one-em-dummy").width();
	}
	function getEm(){
		win = $(window).width();
		width_in_rem = win/REM;
		return width_in_rem;
	}

	// MERGE fire  &  fireBreakpoint INTO CATEGORY

	function getCategory(){
		getEm();

		if (width_in_rem >65) {
			category = "desktop";
		}
		else if (width_in_rem > 48) {
			category = "tablet";
		}
		else if (width_in_rem > 30) {
			category = "fablet";
		}
		else {
			category = "mobile";
		}

		if (previous_category != category) {
			fire();
			previous_category=category;
			if (category != "desktop" ) {
				handheld = true;
			} else 	handheld = false;
		}



		return category;
	}
	function isHandheld(){
		if (handheld == null) getCategory();
		return handheld;
	}
	function fire(){
		TARGET.trigger("is"+category);
		log("is"+category,"e");
	}

	if (EVENTS) {
		$(window).resize( function(){
			getCategory();

		});
	}

	return	{
		em 		:  getEm,
		type 		: getCategory,
		isHandheld 	:  isHandheld
	}
})();

jQuery(document).ready(function($) {
	lg("This device is "+device.em()+ "em wide");
	lg("This is a "+device.type()+ " device");
	lg("This is a handheld device : "+device.isHandheld());
});






