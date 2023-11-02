


var menuBar = document.querySelector(".menuBar");
var nav = document.querySelector("nav");

menuBar.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
}
