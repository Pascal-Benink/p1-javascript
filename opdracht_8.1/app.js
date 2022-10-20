function multiply() {
    let x = document.getElementById("getal1").value;
    let y = document.getElementById("getal2").value;
    let test = document.getElementById("test"); 
    let z = x * y;
    test.innerText = z
    if (x > 0) {
    } else {
        test.innerText = "het getal is te laag"
    }
}

function devide() {
    let x = document.getElementById("getal1").value;
    let y = document.getElementById("getal2").value;
    let test = document.getElementById("test"); 
    let z = x / y;
    test.innerText = z
    if (x > 0) {
    } else {
        test.innerText = "het getal is te laag"
    }
    if (y > 0) {
    } else {
        test.innerText = "het getal is te laag"
    }
}

function add() {
    let x = document.getElementById("getal1").value;
    let y = document.getElementById("getal2").value;
    let test = document.getElementById("test"); 
    let z = x + y   
    test.innerText = z
    if (x > 0) {
    } else {
        test.innerText = "het getal is te laag"
    }
    if (y > 0) {
    } else {
        test.innerText = "het getal is te laag"
    }
}

function minus() {
    let x = document.getElementById("getal1").value;
    let y = document.getElementById("getal2").value;
    let test = document.getElementById("test"); 
    let z = x - y;
    test.innerText = z
    if (x > 0) {
    } else {
        test.innerText = "het getal is te laag"
    }    if (y > 0) {
    } else {
        test.innerText = "het getal is te laag"
    }
}
