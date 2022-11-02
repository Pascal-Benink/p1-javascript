let closeded = document.querySelector("emojy closed active");
let opening = document.querySelector("emojy open");

function openFace(){
    opening.classList.add("active");
    closeded.classList.remove("active");
    opening.classList.contains("active");
    closeded.classList.contains("active");
};
function closedFace(){
    closeded.classList.add("active");
    opening.classList.remove("active");
    opening.classList.contains("active");
    closeded.classList.contains("active");
};
// Variablen niet hetzelfed omdat dit niet werkt