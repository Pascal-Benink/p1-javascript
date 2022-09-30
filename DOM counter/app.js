let title = document.getElementById("title");

let count = 0;

function counter(){
    count += 1;
    title.innerText = count + " Keer geklikt";
    document.body.style.backgroundColor = "blue";
}

function counter2() {
    count -=1
    title.innerText = count + " Keer geklikt";
    document.body.style.backgroundColor = "red";
}
