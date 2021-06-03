let table = document.getElementById("table");

table.innerHTML = ""
for (let i = 0; i < 1; i++) {
var row = table.insertRow(i);

for (let z = 0; z < 1; z++) {
    var blockjes = row.insertCell();
    blockjes.classList.add("block");
    blockjes.style.background = "red";

    blockjes.addEventListener("click", (evt) => {
        if(evt.target.style.background == "red"){
            evt.target.style.background = "green";
        }
        else{
            evt.target.style.background = "red"
        }
    });
}
}

function one(){
    table.innerHTML = ""
for (let i = 0; i < 1; i++) {
var row = table.insertRow(i);

for (let z = 0; z < 1; z++) {
    var blockjes = row.insertCell();
    blockjes.classList.add("block");
    blockjes.style.background = "red";

    blockjes.addEventListener("click", (evt) => {
        if(evt.target.style.background == "red"){
            evt.target.style.background = "green";
        }
        else{
            evt.target.style.background = "red"
        }
    });
}
}
}

function three(){
    table.innerHTML = ""
    for (let i = 0; i < 3; i++) {
    var row = table.insertRow(i);

    for (let z = 0; z < 3; z++) {
        var blockjes = row.insertCell();
        blockjes.classList.add("block");
        blockjes.style.background = "red";

        blockjes.addEventListener("click", (evt) => {
            if(evt.target.style.background == "red"){
                evt.target.style.background = "green";
            }
            else{
                evt.target.style.background = "red"
            }
        });
    }
}
}

function six(){
    table.innerHTML = ""
    for (let i = 0; i < 6; i++) {
    var row = table.insertRow(i);

    for (let z = 0; z < 6; z++) {
        var blockjes = row.insertCell();
        blockjes.classList.add("block");
        blockjes.style.background = "red";

        blockjes.addEventListener("click", (evt) => {
            if(evt.target.style.background == "red"){
                evt.target.style.background = "green";
            }
            else{
                evt.target.style.background = "red"
            }
        });
    }
}
}


function nine(){
    table.innerHTML = ""
    for (let i = 0; i < 9; i++) {
    var row = table.insertRow(i);

    for (let z = 0; z < 9; z++) {
        var blockjes = row.insertCell();
        blockjes.classList.add("block");
        blockjes.style.background = "red";

        blockjes.addEventListener("click", (evt) => {
            if(evt.target.style.background == "red"){
                evt.target.style.background = "green";
            }
            else{
                evt.target.style.background = "red"
            }
        });
    }
}
}