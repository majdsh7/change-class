var DarkModeBtn = document.querySelector("button");
var content= document.querySelector("body");
var lightModeBtn = document.querySelector(".light");

function DarkMode(){
    content.classList.add("dark");
}
function lightMode(){
    content.classList.remove("dark");
}
DarkModeBtn.onclick = DarkMode;
lightModeBtn.onclick = lightMode;