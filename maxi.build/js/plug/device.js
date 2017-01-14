

// ========================================================================
// 	D E V I C E   1 . 3    	-	a  n i f t y   l i t t l e    h e l p e r    p l u g i n
// ========================================================================

var device = (function(){

	var	VERBOSE 		=false,
		EVENTS	 		= true, 		//fire events
		WATCH 			= true, 		//watch, and report changes, as they happen

		REM 			= $(".one-em-dummy").width() || prep(),   //pland dummy for reference

		TARGET 		= $("html"),     	//this is the event target

		win			= {		//  inner window dimensions
					   h : null,
					   w: null
		},
		width_in_rem		= null,	//width devided by reference dummy
		category 		= null, 	//device category : desktop, tablet, fablet, mobile
		previous_category	= null, 	//tmp for watching changes
		orientation 		= null,	// orientation: portrait, landscape
		previous_orientation 	= null,	//tmp for watching changes
		handheld 		= null 	// general category : true, false
	;


	function log(a,b,c){
		if ( VERBOSE ) lg(a,b,c);
	}
	function prep(){
		// plant reference dummy in html
		// return dummy width in pixels
		$("body").prepend("<div class= 'one-em-dummy' style='width:1rem; height:1px; display:none'></div>");
		log("em dummy planted in html","+");
		return $(".one-em-dummy").width();
	}
	function getEm(){
		// devide width with reference dummy
		// return number of ems
		win.w = window.innerWidth;
		win.h = window.innerHeight;
		width_in_rem = win.w/REM;
		return width_in_rem;
	}

	function getCategory(){
		if  (orientation == "portrait") {

			if 	(width_in_rem > 68) {		category = "desktop";}
			else if 	(width_in_rem > 28) {		category = "tablet";}
			else if 	(width_in_rem > 24) {		category = "fablet";}
			else {					category = "mobile";}

		} else  if  (orientation == "landscape") {

			if 	(width_in_rem > 68) {		category = "desktop";}
			else if 	(width_in_rem > 48) {		category = "tablet";}
			else if 	(width_in_rem > 41) {		category = "fablet";}
			else {					category = "mobile";}
		}

		if (previous_category != category) {
			fire(category);
			previous_category=category;
			// set the handheld state
			if (category != "desktop" ) {
				if (handheld == false || handheld == null) {
					handheld = true;
					fire("handheld");
				}
			} else 	{
				if (handheld == true || handheld == null) {
					handheld = false;
					fire("notHandheld");
				}
			}
		}
		return category;
	}
	function getOrient(){
		getEm();
		orientation = win.h> win.w ? "portrait" :  "landscape"; // give a label to orientation
		if (previous_orientation != orientation) {
			previous_orientation=orientation;
			fire(orientation);
		}
		return orientation;
	}
	function isHandheld(){
		if (handheld == null) getCategory();
		return handheld;
	}
	function fire(what){
		if (EVENTS) {
			what = what[0].toUpperCase() +what.slice(1);
			TARGET.trigger("is"+what);
			lg("is"+what,"e");
		} else return 0;
	}

	function display(){
		lg("This device is "+device.em()+ "em wide");
		lg("This is a "+device.type()+ " device");
		if (device.isHandheld()) lg("This is a handheld device");
			else lg("This is not a handheld device");
	 	lg("This device is in "+device.orientation() + " mode");
	 	lg("Dimension: "+win.w+"x"+win.h);
	}

	if (WATCH) {
		$(window).resize( function(){
			getEm();
			getCategory();
			//display();
			$('html').trigger('windowResize',[win.h,win.w]);
		});
	}
	// PUBLIC
	return	{
		em 		:  getEm,	//returns a plain number
		type 		: getCategory,	//returns "desktop","tablet","fablet","mobile"
		isHandheld 	:  isHandheld,	//returns boolean
		orientation 	: getOrient,	//returns "portrait", "landscape"
		display: display,
		win: win  
	};
})();

jQuery(document).ready(function($) {
	device.em();
});






