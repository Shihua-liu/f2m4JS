let getalA,getalB,antwoord,jouwAntwoord,goedfout,tafel; 

const opgaveblad = document.getElementById('opgaveblad');
const input1 = document.getElementById('input1');
const execButton = document.getElementById('execButton');
const tafelnummer = document.getElementById('tafel10')

tafel = 10

function tafel20(){
    tafel = 20
    maakOpgave()
}

maakOpgave();
function maakOpgave(){
    getalA = Math.floor(Math.random()* tafel) + 1;
    getalB = Math.floor(Math.random()* tafel) + 1;
    antwoord = getalA * getalB;

    opgaveblad.innerHTML = getalA + " x " + getalB;
}

execButton.addEventListener('click',checkAntwoord);

function checkAntwoord(){
    jouwAntwoord = input1.value;
    if(antwoord == jouwAntwoord){
        goedfout = true
        container.style.background = "green"
    }
    else{
        goedfout = false
        container.style.background = "red"
    }
    setTimeout(wachten,2000)
}

function wachten(){
    container.style.background = "white"
    input1.value = ""
    input1.focus()
    maakOpgave()
}

