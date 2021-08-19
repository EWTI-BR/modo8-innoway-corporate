// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var header = document.getElementById("header");
var navbar = document.getElementById("aside");
var container = document.getElementById("container");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
//    console.log(window.pageYOffset + "-" + sticky)

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}
/*
window.onresize = function () { myResponse() }

function myResponse() {
    console.log('tao me mexendo!')
    if (window.innerWidth < 1280) {
        navbar.classList.add("responsive-bar")
        container.classList.add("responsive-page")
        container.classList.remove("container")
        //navbar.style.display = 'none';
    }
    if (window.innerWidth < 1000) {
        container.classList.add("responsive")
    }


}

*/