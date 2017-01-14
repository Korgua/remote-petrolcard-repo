var notification = (function(){
	var	$notification_container = prependContainer();
	function prependTogether(text, timeout){
		var	$notification_idx = $('.notification_bar').length+1
		,	$notification_bar = $('<div/>',{class:'notification-bar','data-timeout':timeout,'data-index':$notification_idx})
		,	$notification_txt = $('<div/>',{class:'notification-text',text:text})
		//,	$notification_txt = $('<div/>',{class:'notification-text <!-- eleven columns -->',text:text})
		//,	$close_btn	= $('<div/>',{class:'notification-bar-close <!-- one column -->',text:'x','data-index':$notification_idx})
		,	$close_btn	= $('<div/>',{class:'notification-bar-close',text:'x','data-index':$notification_idx})
		,	$pauseable
		;

		$close_btn.on('click',function(){
			$(this).parent().slideUp(500);
			setTimeout(function(){
				$notification_bar.remove();
			}, 500);
		});
		//$notification_bar.prepend($close_btn);
		$notification_bar.prepend($notification_txt);
		$notification_container.append($notification_bar);	

		$pauseable = setTimeout(function(){
			removeNotificationBar($notification_bar)
		},timeout);

		$notification_bar.on('mouseover',function(){
			console.log('mouseover');
			clearTimeout($pauseable);
		});

		$notification_bar.on('mouseout',function(){
			console.log('mouseout');
			$pauseable = setTimeout(function(){
				removeNotificationBar($notification_bar)
			},timeout);
		});
	}

	function removeNotificationBar($bar){
		$bar.slideUp(500);
		setTimeout(function(){
			$bar.remove();
		},500);
	};

	function prependContainer(){
		if(!$('.notification-container').length)
			$('body').prepend($('<div/>',{class:'notification-container'}));
		return $('.notification-container');
	};

	function emptyContainer(){
		$notification_container.empty();		
	}

	return {
		prep:prependTogether,
		empty:emptyContainer
	}

})();
$('document').ready(function(){
	$('html')
		.on('notification',function(event,text,timeout){
			notification.prep(text,timeout);
		})
		.on('emptyNotification',function(){
			notification.empty();
		})
		;
});