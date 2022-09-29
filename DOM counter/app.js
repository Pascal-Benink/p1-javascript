let button = document.getElementById("btn");
let button2 = document.getElementById("btn2");

let count = 0;

function clicker(){
        count += 1;
    button.innerText = count + " Keer geklikt"
    button.innerText = count + " Keer geklikt";
    button2.innerText = count + " Keer geklikt";
}

function clicker2(){
    count -=1;
    button.innerText = count + " Keer geklikt";
    button2.innerText = count + " Keer geklikt";

}

function clicker3(){
    count =0;
    button.innerText = count + " Keer geklikt";
    button2.innerText = count + " Keer geklikt";

}