

// select navBtn for mobile navBar


let navBtn = document.querySelector(".bars");

let mainNav = document.querySelector(".main-nav");
console.log(mainNav)

navBtn.addEventListener("click" , function() {
    console.log("jj")
    mainNav.classList.toggle(".openNav")
})