"use strict";

//let h1 = document.querySelector("h1");
// console.log(document.querySelector(".item"));
// console.log(h1.parentNode.parentNode.parentNode.parentNode);
//console.log(h1.closest("product").children);

// let elem=document.querySelector(".item1");
// console.log(elem.parentNode.parentNode.nextElemntsSibling.firstElementChild);
// console.log(document.querySelector(".salam").nextElementSibling.lastElementChild)

// let btns=document.querySelectorAll("button");
// let elems=document.querySelectorAll("h1");

// btns.forEach(btn =>{
//     btn.addEventListener("clic", function(e){
//         // this.nextElementSibling.style.backgroundColor = "red";
//     })
// })

// document.addEventListener("keydown",function(e){
//     if(e.keyCode==13){
//         document.querySelector("body").style.backgroundColor = "black"
//     }
// })

// let sideBar = document.querySelector(".sidebar");

// let openIcon = document.querySelector(".open-icon");

// let closeIcon = document.querySelector(".close-icon");

// openIcon.addEventListener("click",function(){
//     sideBar.classList.remove("move-sidebar")
//     this.classList.remove("d-none");
//     this.previousElementSibning.classList.remove("d-none");
// })

// closeIcon.addEventListener("click",function(){
//     sideBar.classList.add("move-sidebar")
//     this.classList.remove("d-none");
//     this.nextElementSibling.classList.remove("d-none");
// })



// document.querySelector(".paste").addEventListener("click",function(){
//     document.querySelector("h2").innerText=document.querySelector("h1").innerText;
//     document.querySelector("h1").innerText="";

// })

// let sentBtn=document.querySelector(".send");

// sentBtn.addEventListener("mouseover",function(){
//     // alert("Tunzale xanim")
//     this.classList.remove("btn-primary");
//     this.classList.add("btn-success");

// })

// sentBtn.addEventListener("mouseout",function(){

//     this.classList.remove("btn-success");
//     this.classList.add("btn-primary");

// })


// let input = document.querySelector("input");

// input.addEventListener("keydown",function(){
//     console.log("Agshin bey")

// })


// document.querySelector(".form-select").addEventListener("change",function(){
//     console.log(this.value)
// })


// console.log(document.querySelector("a").getAttribute("href"))
// document.querySelector("a").serAttribute("href","salam")

let linkEdinBtn = document.querySelector(".linkedin");
let googleBtn = document.querySelector(".google");

linkEdinBtn.addEventListener("click",function(){
    document.querySelector("a").setAttribute("href","https://www.linkedin.con/feed/");
    document.querySelector("a").innerText = "Go to linkedin";
})

googleBtn.addEventListener("click",function(){
    document.querySelector("a").setAttribute("href","https://www.google.com");
    document.querySelector("a").innerText = "Go to google";
})



