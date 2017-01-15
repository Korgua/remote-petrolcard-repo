console.log('alma');
var notification = (function(){
	var	$notification_container = prependContainer();
	function prependTogether(type, text, timeout){
		if($('.notification-bar[data-type="'+type+'"]').length>0){
			emptyContainer(type);
		}

		var	$notification_idx = $('.notification-bar').length+1
		,	$notification_bar = $('<div/>',{class:'notification-bar','data-timeout':timeout,'data-type':type,'data-index':$notification_idx})
		,	$notification_txt = $('<div/>',{class:'notification-text',text:text})
		,	$close_btn	= $('<div/>',{class:'notification-bar-close',text:'x','data-index':$notification_idx})
		,	$pauseable
		;

		$notification_bar.prepend($notification_txt);
		$notification_container.append($notification_bar);	

		$pauseable = setTimeout(function(){
			removeNotificationBar($notification_bar)
		},timeout);

		$notification_bar.on('mouseover',function(){
			clearTimeout($pauseable);
		});

		$notification_bar.on('mouseout',function(){
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

	function emptyContainer(type){
		var $used_bar = $('.notification-bar[data-type="'+type+'"]');
			for(var i=0;i<$used_bar.length;i++)
				removeNotificationBar($($used_bar[i]));		
	}

	return {
		prep:prependTogether,
		empty:emptyContainer
	}

})();
$('document').ready(function(){
	$('html')
		.on('notification',function(event,type,text,timeout){
			notification.prep(type,text,timeout);
		})
		.on('emptyNotification',function(event, type){
			notification.empty(type);
		})
		;
});