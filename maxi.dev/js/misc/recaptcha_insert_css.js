$('iframe').attr('src','about:blank');	

$('iframe').on('load',function() {
		console.log("sikeres");
		//.rc-anchor-normal-footer{
		//	display: none !important;
		//}
		//<link rel="stylesheet" href="css/login.css" type="text/css">
		$link = $('</link>',{rel:'stylesheet',href:'css/captcha.css', type:'text/css'});
		$('iframe').contents().find("head")
			.append($link)
			.append("<style type='text/css'> .rc-anchor-normal-footer{display: none !important;} </style>");
	});