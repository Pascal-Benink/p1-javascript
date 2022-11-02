let closeded = document.querySelector(".emojy .closed .active");
let opening = document.querySelector(".emojy .open");

function closedFace(){
    if (closeded.classList.contains(".active")) {
        opening.classList.add(".active");
        closeded.classList.remove(".active");
    }
};
function openFace() {
    if (opening.classList.contains(".active")) {
        opening.classList.add(".active");
        closeded.classList.remove(".active");
    }
};
// Variablen niet hetzelfed omdat dit niet werkt