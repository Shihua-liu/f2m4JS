let achtergrond = document.getElementsByClassName("achtergrond");
let text = document.getElementsByClassName("text");
const mybtn = document.getElementById("btn")
let achterkleur = ["green", "red", "yellow"];
let textkleur = ["orange", "black", "purple"];

for (let i = 0; i < achtergrond.length;i++){
    achtergrond[i].addEventListener("click",function(){
        setachtergrond(i)
    });
}

function setachtergrond(i){
    document.body.style.background = achterkleur[i]
}

for (let i = 0; i < text.length;i++){
    text[i].addEventListener("click",function(){
        setvoorgrond(i)
    });
}

function setvoorgrond(i){
    document.body.style.color = textkleur[i]
}

mybtn.addEventListener("click", ()=> {
    window.location.reload();
})