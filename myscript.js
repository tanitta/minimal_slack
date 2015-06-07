document.OnLoad = start();
function start() {
	$("body").css({minWidth: 100});
	hide();
	$("body").keydown(function(e){
		if(event.ctrlKey){
			if(e.keyCode === 89){
				toggle_sidebar();
				return false;
			}
		}
	});
}

function toggle_sidebar(){
	if ($("#col_channels").is(':visible')){
		hide();
	}else{
		show();
	}
}

function hide(){
	$("#col_channels,#col_channels_bg,#team_menu").hide();
	$("#footer").css({left:0});
	$("#messages_container").css({marginLeft:0});
	$(window).trigger('resize');
}

function show(){
	$("#col_channels,#col_channels_bg,#team_menu").show();
	$("#messages_container").css({marginLeft:220});
	$("#footer").css({left:220});
	$(window).trigger('resize');
}

