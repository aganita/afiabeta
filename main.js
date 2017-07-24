var controller = new ScrollMagic.Controller();

// title fadeout
var tween = TweenMax.from(".header", 1, {autoAlpha: 0});

var scene = new ScrollMagic.Scene({
	triggerElement: ".header", 
	duration: 500, 
	offset: 0,
	triggerHook: 0 })
		.setTween(tween)
		.addTo(controller);

// $(".left-callout").css("visibility", "visible");
// $(".right-callout").css("visibility", "visible");