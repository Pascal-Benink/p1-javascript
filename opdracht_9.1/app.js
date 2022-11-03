let modal = document.getElementById("myModal");

let x = document.getElementById("getal1").value;// als je achter value een nummer zet dan blijft dat het nummer dit veranderd niet. zelfde als in html. 
//value = Number werkt ook niet. 

let btn = document.getElementById("myBtn");


let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

function leefcheck() {  
  if (x > 18) {
    console.log("hey")
    window.location.replace("http://www.w3schools.com");
  } else {
    alert("helaas je bent te jong")
    console.log(z)
  }
}

