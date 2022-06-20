console.log("Holla!")

const toggler = document.querySelector(".toggler");
const navMenu = document.querySelector(".nav");
const cover = document.querySelector(".cover");
const navBar = document.querySelector("nav");
const progressBar = document.querySelector(".progress-bar");
const aboutNav = document.querySelector(".about");
const projectNav = document.querySelector(".project");
const contactNav = document.querySelector(".contact");
let scrollPercent = null;
let progress = null;

toggler.addEventListener("click", navControl);
aboutNav.addEventListener("click", navControl);
projectNav.addEventListener("click", navControl);
contactNav.addEventListener("click", navControl);

function navControl() {
    const ariaExpanded = toggler.getAttribute("aria-expanded");
    if (ariaExpanded == "true") {
        toggler.setAttribute("aria-expanded", false)
        document.body.classList.remove("stop-scroll");
        navMenu.setAttribute("data-visibility", false);
        cover.setAttribute("aria-expanded", false);
        if(scrollPercent > 40) {
            progressBar.style.setProperty("--progress", progress)
        }
    } else {
        toggler.setAttribute("aria-expanded", true)
        document.body.classList.add("stop-scroll"); 
        navMenu.setAttribute("data-visibility", true);
        cover.setAttribute("aria-expanded", true);
        if(scrollPercent > 40) {
            progressBar.style.setProperty("--progress", "40%")
        }
    }
}

window.onscroll = function() {
    if(window.scrollY > 22){
        navBar.classList.add("scrolled")
    } else{
        navBar.classList.remove("scrolled")
    }   
};

document.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
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


