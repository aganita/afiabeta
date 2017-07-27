// var controller = new ScrollMagic.Controller();

// // title fadeout
// var tween = TweenMax.from(".header", 2, {autoAlpha: 0, delay: 0.5, ease: Power1.easeOut});

// var scene = new ScrollMagic.Scene({
// 	triggerElement: ".header", 
// 	duration: 500, 
// 	offset: 0,
// 	triggerHook: 0 })
// 	.setTween(tween)
// 	.addTo(controller);

checkVideo();

// play video when scrolled to
$(window).scroll(function() {
	checkVideo();
});



function checkVideo() {
	$('video').each(function(){
    if ($('after').is(":in-viewport")) {
      $(this)[0].play();
    } else {
      $(this)[0].pause();
    }
	})
} 