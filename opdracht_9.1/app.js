let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

function leefcheck() {
  let x = document.getElementById("getal1").value;
  if (x > 18) {
    console.log("hey")
    window.location.replace("https://decity.nl/");
  } else {
    alert("helaas je bent te jong")
  }
}