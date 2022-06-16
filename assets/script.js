console.log("Holla!")

const toggler = document.querySelector(".toggler");
const navMenu = document.querySelector(".nav");
const cover = document.querySelector(".cover");
const navBar = document.querySelector("nav");
const progressBar = document.querySelector(".progress-bar");
let scrollPercent = null;
let progress = null;

toggler.addEventListener("click", () => {
    const ariaExpanded = toggler.getAttribute("aria-expanded")
    if (ariaExpanded == "false") {
        toggler.setAttribute("aria-expanded", true)
        navMenu.setAttribute("data-visibility", true)
        cover.setAttribute("aria-expanded", true)
        if(scrollPercent > 40) {
            progressBar.style.setProperty("--progress", "40%")
        }
    } else {
        toggler.setAttribute("aria-expanded", false)
        navMenu.setAttribute("data-visibility", false)
        cover.setAttribute("aria-expanded", false)
        if(scrollPercent > 40) {
            progressBar.style.setProperty("--progress", progress)
        }
    }
});

window.onscroll = function() {
    if(window.scrollY > 22){
        navBar.classList.add("scrolled")
    } else{
        navBar.classList.remove("scrolled")
    }   
};

document.addEventListener('scroll', () => {
    const ariaExpanded = toggler.getAttribute("aria-expanded");
    const {scrollTop, scrollHeight} = document.documentElement;
    scrollPercent = (scrollTop / (scrollHeight - window.innerHeight))*100;
    progress = scrollPercent.toString() + "%";
    if(scrollPercent > 40) {
        if(ariaExpanded=="false"){
            progressBar.style.setProperty("--progress", progress)
        }else{
            progressBar.style.setProperty("--progress", "40%")
        }
    }else{
        progressBar.style.setProperty("--progress", progress)
    }
});

let separator = document.querySelectorAll(".separator");
let mainHeader = document.querySelectorAll(".main__header");
let mainTitle = document.querySelectorAll(".header__title");

separator = Array.from(separator);
mainHeader = Array.from(mainHeader);
mainTitle = Array.from(mainTitle);

const mainHeaderWidth = [];
for(x of mainHeader) {
    const width = x.clientWidth;
    mainHeaderWidth.push(width);
}

const mainTitleWidth = [];
for (x of mainTitle) {
    const width = x.clientWidth;
    mainTitleWidth.push(width);
}

for (let i = 0; i < separator.length; i++) { 
    let separatorWidth = 360 - mainTitleWidth[i] - 20;
    separatorWidth = separatorWidth.toString() + "px"
    separator[i].style.setProperty("--width", separatorWidth);
}

console.log(document.querySelector(".nav__link"))



