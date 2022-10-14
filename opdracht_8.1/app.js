function multiply() {
    let x = document.getElementById("getal1").value;
    let y = document.getElementById("getal2").value;
    let test = document.getElementById("test"); 
    let z = x * y;
    test.innerText = z
}

function devide() {
    let x = document.getElementById("getal1").value;
    let y = document.getElementById("getal2").value;
    let test = document.getElementById("test"); 
    let z = x / y;
    test.innerText = z
}

function add() {
    let x = document.getElementById("getal1").value;
    let y = document.getElementById("getal2").value;
    let test = document.getElementById("test"); 
    let z = x + y   
    test.innerText = z
}

function minus() {
    let x = document.getElementById("getal1").value;
    let y = document.getElementById("getal2").value;
    let test = document.getElementById("test"); 
    let z = x - y;
    test.innerText = z
}
