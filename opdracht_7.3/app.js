let getal = 0
let element = document.getElementById("getal")
element.innerText = getal
function erbij() {
    getal = getal + 1
    element.innerText = getal
    if (getal > 9) {
        getal = 0
        element.innerText = getal
    }
}
