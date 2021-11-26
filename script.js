function add(a, b){
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operator() {
    const whatAdd = prompt("What do you want to do?", "add? subtract? multiply? divide?");
    switch (whatAdd) {
        case "add":
            const a = prompt("First number?", )
            const b = prompt("Second number?", )
            return add(+a, +b);
        case "subtract":
            const aa = prompt("First number?", )
            const bb = prompt("Second number?", )
            return subtract(+aa, +bb);
        case "multiply":
            const aaa = prompt("First number?", )
            const bbb = prompt("Second number?", )
            return multiply(+aaa, +bbb);
        case "divide":
            const aaaa = prompt("First number?", )
            const bbbb = prompt("Second number?", )
            return divide(+aaaa, +bbbb);
    }
}

const keys = document.querySelectorAll("#btnBox button");

const keyClear = document.getElementById("clearAC");

keyClear.addEventListener("click", clearInput);

keys.forEach(key => key.addEventListener("click", inputNumbers))

function inputNumbers(e) {
    const choice = e.target.id;
    const display = document.querySelector("#shownumbers");
    display.textContent += choice;
}

function clearInput() {
    const display = document.querySelector("#shownumbers");
    display.textContent = "0";
}
