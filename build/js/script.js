
console.log("e")

let animationInProgress = false;
let animationId
document.body.addEventListener("click", (e)=>
{
    const clickEffect = document.querySelector(".click-effect");
    if(animationInProgress){
        clearTimeout(animationId);
        clickEffect.classList.remove("effect");
        void clickEffect.offsetWidth;
    }
    clickEffect.style.top = e.clientY + "px";
    clickEffect.style.left = e.clientX + "px";
    clickEffect.classList.add("effect");
    animationInProgress = true
    animationId = setTimeout(()=>{
        clickEffect.classList.remove("effect");
        animationInProgress = false;
    }, 750)
})


const ageDivs = document.getElementsByClassName("age")
age = Date.now() - new Date(2006, 3, 23);
age = Math.floor(age / 1000 / 60 / 60 / 24 / 365);
ageDivs[0].innerText = "I am " + age + " years old"
ageDivs[1].innerText = "I am " + age + " years old"