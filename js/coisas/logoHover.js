const text = window.document.getElementById("text");
const img = window.document.getElementById("img");

text.style.opacity = 0;

img.addEventListener("click", clicou)

img.style.transform="translateY(92px)"; 

let click = -1;
function clicou() {
    click++
    if(click == 0){
        img.style.transform="translateY(30px)";
        text.style.opacity = 1;
    }
    if(click == 1){
        img.style.transform="translateY(92px)";
        text.style.opacity = 0;
        click = -1;
    }
}

img.addEventListener("mouseenter", foi);
let passou = -1;

function foi() {
    passou++
    if(passou == 0){
        img.style.transform="translateY(30px)";
        text.style.opacity = 1;
    }
    if(passou == 1){
        img.style.transform="translateY(92px)";
        text.style.opacity = 0;
        passou = -1;
    }
}