
// create the toggle active class 
let links = document.querySelectorAll(".list li");
activeClass(links);

// make the stars active 
let boxes = document.querySelectorAll(".menu-icons");

boxes.forEach((box) => {
    let stars = box.querySelectorAll(".menu-icons i");
    stars.forEach((star, index1) => {
        star.addEventListener("click", () => {
            stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add("active"): star.classList.remove("active") 
            }) 
        })
    })
})

// make the hearth active onclick 
let hearth = document.querySelectorAll(".hearth-react i");
hearth.onclick = ifAdctive(hearth);

// make the animation of menu prods
window.onscroll = () => {
    let theMenu = document.querySelector(".menu");
    getSection(theMenu);
}

// create the active class for the gallery buttons 
let gBtns = document.querySelectorAll(".choice-btns button");
// activeClass(gBtns);

// create the custome gallery 
let galleryImgs = document.querySelectorAll(".image-box");

    gBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            gBtns.forEach((btn) => {
            btn.classList.remove("active");
            });

            btn.classList.add("active");

            galleryImgs.forEach((box) => {
                box.classList.add("hide");

                // checke if there is the same data name 
                if (box.dataset.food === btn.dataset.food || btn.dataset.food === "all") {

                    box.classList.remove("hide");
                }
            });
        });
    });

// get the slides container 
let slides = document.querySelectorAll(".container-slide");
let index = 0;

// create the next function
function next() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}
// create the previous function 
function prev() {
    slides[index].classList.remove("active");
    index = (index + 1 - slides.length) % slides.length;
    slides[index].classList.add("active");
}

// set the active class on burger (in media) 
let burger = document.querySelector(".fa-burger");
let openList = document.querySelector(".list");

burger.addEventListener ("click" , () => {
    oneEleActive(burger, "active");
    oneEleActive(openList, "open");
})


// function for getting a section 

function getSection (element) {
        let scrollY = window.scrollY;
        let offsetTop = element.offsetTop - 400;
        let offsetHeight = element.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            element.classList.add("animated");
        } else {
            element.classList.remove("animated");
        }
}

// function for making the active class 
function activeClass(element) {
    element.forEach((ele) => {
        ele.addEventListener("click", () => {
            element.forEach((ele) => {
            ele.classList.remove("active");
            });

            ele.classList.add("active");
        });
    });
}

// fucntion to add active class with if condition 
function ifAdctive (element) {
    element.forEach((ele) => {
        ele.addEventListener("click", () => {
        if (ele.classList.contains("active")) {
            ele.classList.remove("active");
        } else {
            ele.classList.add("active");
        }
        });
    });
}

// function to add active class to one ele
function oneEleActive(element, className) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        } else {
            element.classList.add(className);
        }
}