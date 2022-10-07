let element1 = document.getElementById("antwoord")

let budget = 100;
let product = 60;

if (budget > product) {
    element1.innerText = "U heeft genoeg geld!"
    element1.style.color = "green"
} else {
    element1.innerText = "Helaas, te weinig geldt"
    element1.style.color = "red"
}