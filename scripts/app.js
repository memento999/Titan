"use strict";

/*
    Header Drop-Down Menu
*/
let drop_downMenu = document.getElementById("drop-down");
let body = document.getElementsByTagName('body')[0];
let menuOpen = false;

document.getElementById('header__menu-btn').addEventListener("click", () => {
    let burgerIcon = document.getElementById("header__menu-btn");
    if (!menuOpen) {
        burgerIcon.classList.add("open");
        body.classList.add("overlay");
        drop_downMenu.style.display = "block";
        menuOpen = true;
    } else {
        burgerIcon.classList.remove('open');
        body.classList.remove("overlay");
        drop_downMenu.style.display = "";
        menuOpen = false;
    }
});

/*
    Header Scroll animation
*/

let header = document.getElementsByTagName('header')[0];

window.onscroll = scrollFunction;

function scrollFunction() {
    if (!menuOpen && window.pageYOffset >= 30) {
        header.style.height = "8rem";
    } else {
        header.style.height = "11rem";
    }
}