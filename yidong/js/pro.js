(function () {
	function resizeBaseFontSize() {
		var rootHtml = document.documentElement,
			deviceWidth = rootHtml.clientWidth;
		if (deviceWidth > 770) {
			deviceWidth = 770;
		}
		rootHtml.style.fontSize = deviceWidth / 7.7 + "px";
	}
	resizeBaseFontSize();
	window.addEventListener("resize", resizeBaseFontSize, false);
	window.addEventListener("orientationchange", resizeBaseFontSize, false);
})();