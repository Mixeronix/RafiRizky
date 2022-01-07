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

//Animations

var tl = gsap.timeline({});

// Section Services Animations
var tl1 = gsap.timeline({
	scrollTrigger: {
		trigger: "#services",
		start: "top 30%",
	},
});

tl1.from("#services_line", 0.75, { y: 75 }).from("#services_s", 0.6, { y: 125 }, "-=0.65");

// Section Workflow Animations
var tl2 = gsap.timeline({
	scrollTrigger: {
		trigger: "#workflow",
		start: "top 30%",
	},
});

tl2.from("#workflow_line", 0.75, { y: 75 })

	.from(".workflow_f", 0.6, { y: 125 }, "-=0.65")
	.from(".workflow_l", 0.6, { y: 100 }, "-=0.5");

// Button Animation
var tl3 = gsap.timeline({
	scrollTrigger: {
		trigger: "#button",
		start: "top 90%",
	},
});

tl3.from("#button", 0.5, { scale: 0 });

// Section Contact Animations
var tl4 = gsap.timeline({
	scrollTrigger: {
		trigger: "#contact",
		start: "top 80%",
	},
});

let ww = $(window).width();

tl4.from("#f_title", 0.6, { y: 50, opacity: 0 })

	.from("#f_text", 0.6, { y: 50, opacity: 0 }, "-=0.4")
	.from("#f_button", 0.6, { scale: 0 }, "-=0.4")
	.from("#icons", 0.6, { width: ww, opacity: 0 }, "-=0.35")
	.from("#copy1", 0.6, { x: -50, opacity: 0 }, "-=0.3")
	.from("#copy2", 0.6, { x: 50, opacity: 0 }, "-=0.6");
