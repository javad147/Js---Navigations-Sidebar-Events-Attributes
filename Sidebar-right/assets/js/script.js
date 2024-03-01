"use strict";

let sideBar = document.querySelector(".sidebar");
let openIcon = document.querySelector(".open-icon");
let closeIcon = document.querySelector(".close-icon");

function openSidebar() {
    sideBar.classList.remove("move-sidebar");
    openIcon.classList.add("d-none");
    closeIcon.classList.remove("d-none");
}

function closeSidebar() {
    sideBar.classList.add("move-sidebar");
    closeIcon.classList.add("d-none");
    openIcon.classList.remove("d-none");
}

openIcon.addEventListener("mouseenter", openSidebar);
closeIcon.addEventListener("mouseenter", openSidebar);
sideBar.addEventListener("mouseleave", closeSidebar);
