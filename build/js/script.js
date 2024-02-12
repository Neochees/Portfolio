let animationInProgress = false;
let animationId;
const clickEffect = document.querySelector(".click-effect");

document.body.addEventListener("click", (e) => {
    if (animationInProgress) {
        clearTimeout(animationId);
        clickEffect.classList.remove("effect");
        void clickEffect.offsetWidth;
    }

    clickEffect.style.top = e.clientY + window.scrollY + "px";
    clickEffect.style.left = e.clientX + "px";
    clickEffect.classList.add("effect");
    
    animationInProgress = true;
    animationId = setTimeout(() => {
        clickEffect.classList.remove("effect");
        animationInProgress = false;
    }, 750);
});

// Update click effect position on scroll
window.addEventListener("scroll", () => {
    if (animationInProgress) {
        clearTimeout(animationId);
        clickEffect.classList.remove("effect");
        void clickEffect.offsetWidth;
        animationInProgress = false;
    }
});

const ageDivs = document.getElementsByClassName("age");
let age = Date.now() - new Date(2006, 3, 23);
age = Math.floor(age / 1000 / 60 / 60 / 24 / 365);
ageDivs[0].innerText = "I am " + age + " years old";
ageDivs[1].innerText = "I am " + age + " years old";
