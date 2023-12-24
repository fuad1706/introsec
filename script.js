


// var menuBar = document.querySelector(".menuBar");
// var nav = document.querySelector("nav");
// 
// menuBar.addEventListener("click", toggleMenu);
// 
// function toggleMenu() {
    // if (nav.style.display === "none" || nav.style.display === "") {
        // nav.style.display = "flex";
    // } else {
        // nav.style.display = "none";
    // }
// }
// 

let menuBar = document.querySelector(".menuBar");
let menulist = document.querySelector(".menulist");

menuBar.onclick = function(){
    menuBar.classList.toggle("open-menu");

    if(menuBar.classList.contains("open-menu")){
        menuBar.src = "./assets/icon-close-menu.svg";
    }
    else{
        menuBar.src = "./assets/icon-menu.svg";
    }
}