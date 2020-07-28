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

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-11rem"; // 11rem is the height of header element
    }
    prevScrollpos = currentScrollPos;
} 