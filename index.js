const head = document.querySelector('.bird-head'); 

window.addEventListener("scroll", () => {

  head.style.transform = "rotate(-" + window.pageYOffset/27 + "deg)";
});
