let element1 = document.getElementById("antwoord")
let product = prompt("Hoeveel kost het product dat je wilt kopen?", 60)
let budget = 100;

if (budget > product) {
    element1.innerText = "U heeft genoeg geld!";
    element1.style.color = "green";
} else {
    element1.innerText = "Helaas, te weinig geldt";
    element1.style.color = "red";
}