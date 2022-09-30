let button = document.getElementById("btn");
let h1 = document.getElementById("h1");

let count = 0;

function counter(){
        count += 1;
    h1.innerText = count + " Keer geklikt";
    document.body.style.backgroundColor = "blue";
}

function counter2() {
    count -=1
    h1.innerText = count + " Keer geklikt";
    document.body.style.backgroundColor = "red";
}
