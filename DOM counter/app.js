let button = document.getElementById("btn");

let count = 0;

function counter(){
        count += 1;
    button.innerText = count + " Keer geklikt";
    document.body.style.backgroundColor = "blue";
}

function counter2() {
    count -=1
    button.innerText = count + " Keer geklikt";
    document.body.style.backgroundColor = "red";
}
