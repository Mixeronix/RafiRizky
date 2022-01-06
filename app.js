// Scroll to Sections Function
function btn_to(to) {
	if (to == "home") {
		window.scrollTo(0, 0);
	} else {
		window.scrollTo(0, $("#" + to).offset().top - 77);
	}
}
