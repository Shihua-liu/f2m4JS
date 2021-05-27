
let alineas = document.getElementsByTagName("p");

for(let i = 0; i < alineas.length;i++){
    alineas[i].addEventListener("click",(evt)=>{
        console.log(evt.target);
        evt.target.style.background = "red"
    });
}

