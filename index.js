const head = document.querySelector(".bird-head");

window.addEventListener("scroll", () => {
	head.style.transform = "rotate(-" + window.pageYOffset / 27 + "deg)";
});

const gear1 = document.querySelector(".gear1");
const gear2 = document.querySelector(".gear2");
const gear3 = document.querySelector(".gear3");

window.addEventListener("scroll", () => {
	gear1.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
	gear2.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
	gear3.style.transform = "rotate(-" + window.pageYOffset / 2 + "deg)";
});

const flowerTarget = document.querySelector(".flower8");
const flower = document.querySelectorAll(".flower");

let start = flowerTarget.offsetTop;

window.addEventListener("scroll", () => {
	let page = window.pageYOffset;
	let flowerPosition = start - page;

	flower.forEach(element => {
		if (flowerPosition <= 650) {
			element.style.opacity = 1;
			console.log("true");
		}
	});
});
