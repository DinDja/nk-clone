// media query event handler
if (matchMedia) {
	const mq = window.matchMedia("(min-width: 700px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

// media query change
function WidthChange(mq) {
	if (mq.matches) {
		// window width is at least 700px
		var slider = tns({
			container: ".my-slider",
			items: 5,
            controls: false,
            nav: false,
            autoplayButtonOutput: false,
			//slideBy: 'page',
			autoplay: true,
			loop: true,
			mouseDrag: true
		});
	} else {

		// remove it...
	}
}