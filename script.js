const keys = document.querySelectorAll("#btnBox button");
const keyClear = document.getElementById("clearAC");
const addKeys = document.querySelector("#add");
const subKeys = document.querySelector("#subtract");
const multKeys = document.querySelector("#multiply");
const divKey = document.querySelector("#divide");
const equalKey = document.querySelector("#equals");
const zeroKey = document.querySelector("#zerobtn button");
const display = document.querySelector("#shownumbers");
let choice;
let displayNumbers = {};


keyClear.addEventListener("click", clearInput);
keys.forEach(key => key.addEventListener("click", inputNumbers));
zeroKey.addEventListener("click", inputNumbers);

addKeys.addEventListener("click", numberOne);
addKeys.addEventListener("click", futureEqual);

subKeys.addEventListener("click", numberOne);
subKeys.addEventListener("click", futureEqual);

multKeys.addEventListener("click", numberOne);
multKeys.addEventListener("click", futureEqual);

divKey.addEventListener("click", numberOne);
divKey.addEventListener("click", futureEqual);

equalKey.addEventListener("click", finalEqual);


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

function operator(choice) {
    let a = displayNumbers.firstNumber
    let b = displayNumbers.secondNumber
    switch (choice) {
        case "add":
            display.textContent = add(+a, +b);
            return add(+a, +b);
        case "subtract":
            display.textContent = subtract(+a, +b);
            return subtract(+a, +b);
        case "multiply":
            display.textContent = multiply(+a, +b);
            return multiply(+a, +b);
        case "divide":
            display.textContent = divide(+a, +b);
            return divide(+a, +b);
    }
}

function futureEqual(e){
    choice = e.target.id;
}

function inputNumbers(e) {
    const choice = e.target.id;
    const display = document.querySelector("#shownumbers");
    if (display.textContent == 0){
        display.textContent = choice;
    }
    else {
        display.textContent += choice;
    }
}

function clearInput() {
    const display = document.querySelector("#shownumbers");
    display.textContent = "0";
}

function numberOne(e) {
    displayNumbers.firstNumber = +display.innerText;
    display.innerText = e.target.id;
}

function finalEqual() {
    displayNumbers.secondNumber = +display.innerText;
    if (choice === undefined){
        display.innerText = "0";
    }
    else {
        operator(choice);
    }
}

