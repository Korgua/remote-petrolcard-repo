
// ========================================================================
//   	B E T T R   L O G G R   1.8
//
//
//	type this:  	get this:
// 	d, debug	debug 	  (   )
// 	i, info		info 	  ( : )
// 	e, event		fired 	  ( e )
// 	l, load		loaded 	  ( + )
// 	k, kill		killed 	  ( x )
//  	a, alert 		alerted    ( ! )
//
// ========================================================================


var	lg 	=	function(content, specimen, who ){
	// turn off complete log with verbose: false
	// hide msg tags, and only leave bangs, if short: true
	// check below for finer filtering
	var 	verbose 	= true,
		short		=true;


	if(!verbose)return 0;			 					// exit if not verbose
	if ( specimen=== undefined )	specimen ="d";					// reset to debug if undefined
											// define constructor for extending commands
	var Breed =  function(bang, tag, enabled) {
		this.bang 	= 	bang;
		this.tag		=	tag;
		this.enabled	= 	enabled;
	};
		 									// message type
							 				//disable type, by setting enabled to "0", or false"
	var m = {
		"d" 		: 	new Breed(	' ', 	"DEBUG", 	1	),
		"a" 		: 	new Breed(    	'!', 	"ALERTED", 	1	),
		"e" 		: 	new Breed (    	'e', 	"FIRED", 	1	),
		"l" 		: 	new Breed (    	'+', 	"LOADED", 	1	),
		"k" 		: 	new Breed (    	'x', 	"KILLED", 	1	),
		"i" 		: 	new Breed (    	':', 	"INFO", 	1	),
		"c" 		: 	new Breed (    	'&', 	"CHANGE", 	1	)
	};
											// add subscriptions, mutate types
	m.alert 		= m.a;
	m.fire		= m.e;
	m.load 		= m.l;
	m.kill 		= m.k;
	m["!"] 		= m.a;
	m[":"] 		= m.i;
	m["+"] 		= m.l;
	m["x"] 		= m.k;

	var type= m[specimen];							//assign new name for clarity
											// log me baby, one more time
	var msg;

	short ?
		msg ="  "+type.bang + "\t" + content			//uses this format if short is enabled
	:
		msg =  type.tag + "\t\t" + type.bang + "\t" + content;	//uses this  if short is diasbled


	if ( typeof content =="object")  console.log( content );		// log object with reference, if only one object got passed

	if  (type.bang === "!") {						// alert if bang type is alert
		alert(content);
		console.log( msg );					//also do a log for
	}    else    if( type.enabled == false ){				// fails and exits if current type is not enabled
	}    else    if ( who) {						// extend msg if an event object got passed
		msg += "\t\t@ "+who;
		console.log( msg );
	}   else  {							// if its not special, then... just log it
		console.log( msg );
	};
};
// lg("Bettr Loggr 1.7","+");

// TEST CMDS

// lg("alien","i");
// lg("weapons get","l");
// lg("all the time. But once they ","e");
// lg("a man named","k");
// lg("who later got","c");
// lg("-ged ","d","a hospital");