let count = 0;
let counter = document.getElementById("counter");

function minus() {
    if (count == 0) {
        count = 0;
    } else {
        count = count - 1;
    }
    counter.innerHTML = count;
}

function plus() {
    count = count + 1;
    counter.innerHTML = count;
}