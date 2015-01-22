var holders = [];
var delay = 6200;
var windowWidth = $(window).width();

setInterval(
	function(){
		windowWidth = $(window).width();
	}
);

if(windowWidth > 700){

$(document).ready(function(){
	var i = 0;
	

	$.when(
	$(".personholder").each(function(){
		holders[i] = $(this);
		i++;
	})).done(startLoop);

});

var startLoop = function(){
	var h = 1;
	var width = holders[0].css("width");


	resetHolders();
	holders[0].find(".personcontent").fadeIn();
		holders[0].animate({
			"width":width
	});


	setInterval(function(){
		if(h >= 1){
			holders[Math.max(0,h-1)].find(".personcontent").fadeOut();
			holders[Math.max(0,h-1)].animate({
				"width":"16px"
			});
		}
		holders[h].find(".personcontent").fadeIn();
		holders[h].animate({
			"width":width
		});
		console.log(holders[h]);

		if(h < holders.length-1){
			h++;
		}else{
			setTimeout(function(){
			  resetHolders();
			  h = 0;
			}, delay);
		}

	},delay);
}

var resetHolders = function(){
	for(var i = 1; i < holders.length; i++){
		holders[i].find(".personcontent").fadeOut();
		holders[i].animate({
			"width":"16px"
		});

	}
}

}