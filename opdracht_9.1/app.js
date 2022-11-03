let modal = document.getElementById("myModal");

let x = document.getElementById("getal1").value;// als je achter value een nummer zet dan blijft het zozo dat nummer dit veranderen in het veld werkt niet, het zelfte geld voo als je bhet in de html value="" in zet dus die miet er niet in komen.
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
    console.log(x)
  }
}