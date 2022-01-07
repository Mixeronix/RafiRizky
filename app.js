function btn_to(to) {
	if (to == "home") {
		window.scrollTo(0, 0);
	} else {
		window.scrollTo(0, $("#" + to).offset().top - 77);
	}
}

fetch("./available.json")
	.then(function (resp) {
		return resp.json();
	})
	.then(function (data) {
		if (data.available != true) {
			$("#dot").attr("fill", "red");
			$("#work_state")
				.contents()
				.filter(function () {
					return this.nodeType == 3;
				})
				.each(function () {
					this.textContent = this.textContent.replace("Available for work", "Not available for work");
				});
		}
	});

$(".nav-link").on("click", function () {
	$(".navbar-collapse").collapse("hide");
});
