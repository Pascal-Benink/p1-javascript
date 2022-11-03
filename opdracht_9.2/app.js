let closeded = document.querySelector(".closed");
let opened = document.querySelector(".open");

function closedFace(){
    if (opened.classList.contains("open")) {
        opened.classList.add("active")
        closeded.classList.remove("active")
    }
};
function openFace() {
    if (closeded.classList.contains("closed")) {
        closeded.classList.add("active")
        opened.classList.remove("active")
    }
};
// Variablen niet hetzelfed omdat dit niet werkt