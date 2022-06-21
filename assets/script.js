console.log("Holla!")

const toggler = document.querySelector(".toggler");
const navMenu = document.querySelector(".nav");
const cover = document.querySelector(".cover");
const navBar = document.querySelector("nav");
const progressBar = document.querySelector(".progress-bar");
let navLink = document.querySelectorAll(".nav__link");
let windowWidth = window.innerWidth;
let scrollPercent = null;
let progress = null;

toggler.addEventListener("click", navControl);

navLink = Array.from(navLink);
for (x of navLink) {
    x.addEventListener("click", () => {
        let windowWidth = window.innerWidth;
        if (windowWidth <= 640) {
            navControl();
        }
    });
}

window.onresize = function() {
    windowWidth = window.innerWidth;
}

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
