let getalA,getalB,antwoord,jouwAntwoord,goedfout; 

const opgaveblad = document.getElementById('opgaveblad');
const input1 = document.getElementById('input1');
const execButton = document.getElementById('execButton');

maakOpgave();
function maakOpgave(){
    getalA = Math.floor(Math.random()* 10) + 1;
    getalB = Math.floor(Math.random()* 10) + 1;
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