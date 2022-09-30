let button = document.getElementById ("btn");
let button2 = document.getElementById ("btn2");
let title = document.getElementById("title");

let count = 0;

function counter(){
    count += 1;
    title.innerText = count + " Keer geklikt";
    document.body.style.backgroundColor = "blue";
    button.style.backgroundColor = "red"

}

function counter2() {
    count -=1
    title.innerText = count + " Keer geklikt";
    document.body.style.backgroundColor = "red";
    button2.style.backgroundColor = "blue"
}

