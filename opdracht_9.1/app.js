let modal = document.getElementById("myModal");

let x = document.getElementById("getal1").value;


let btn = document.getElementById("myBtn");


let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function leefcheck() {    
    if (x > 18) {
    window.location.href = "https://decity.nl";
    } else {
    alert("helaas je bent te jong")
    }}
