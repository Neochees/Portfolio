const ageDivs = document.getElementsByClassName("age")
age = Date.now() - new Date(2006, 3, 23);
age = Math.floor(age / 1000 / 60 / 60 / 24 / 365);
ageDivs[0].innerText = "I am " + age + " years old"
ageDivs[1].innerText = "I am " + age + " years old"