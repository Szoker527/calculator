const keys = document.querySelectorAll("#btnBox button");
const keyClear = document.getElementById("clearAC");
const addKeys = document.querySelector("#add");
const subKeys = document.querySelector("#subtract");
const multKeys = document.querySelector("#multiply");
const divKey = document.querySelector("#divide");
const equalKey = document.querySelector("#equals");
const zeroKey = document.querySelector("#zerobtn button");
const display = document.querySelector("#shownumbers");
let adds = "+";
let subtracts = "-";
let multiplys = "*";
let divides = "/";
let userInput = {};
// let userInput.choice;

keyClear.addEventListener("click", clearInput);
keys.forEach(key => key.addEventListener("click", inputNumbers));
zeroKey.addEventListener("click", inputNumbers);

addKeys.addEventListener("click", numberOne);

subKeys.addEventListener("click", numberOne);

multKeys.addEventListener("click", numberOne);

divKey.addEventListener("click", numberOne);

equalKey.addEventListener("click", finalEqual);


function add(a, b){
    let finalNumber = a + b;
    userInput.fNum = finalNumber;
    userInput.sNum = b;
    display.textContent = userInput.fNum;
    display.textContent = String(display.textContent).substr(0, 12);
    return a + b;

}

function subtract(a, b) {
    let finalNumber = a - b;
    userInput.fNum = finalNumber;
    userInput.sNum = b;
    display.textContent = userInput.fNum;
    display.textContent = String(display.textContent).substr(0, 12);
    return a + b;
}

function multiply(a, b) {
    let finalNumber = a * b;
    userInput.fNum = finalNumber;
    userInput.sNum = b;
    display.textContent = userInput.fNum;
    display.textContent = String(display.textContent).substr(0, 12);
    return a + b;
}

function divide(a, b) {
    let finalNumber = a / b;
    userInput.fNum = finalNumber;
    userInput.sNum = b;
    display.textContent = userInput.fNum;
    display.textContent = String(display.textContent).substr(0, 12);
    return a + b;
}

function operator(choice, a, b) {
    if (choice == "add") {
        console.log(a,b);
        add(a, b);
        userInput.fNum;
    }
    else if(choice == "subtract") {
        console.log(a,b);
        subtract(+a, +b);
    }
    else if(choice == "multiply"){
        console.log(a,b);
        multiply(+a, +b);
        userInput.finalScore = +display.textContent;
    }
    else if(choice == "divide"){
        console.log(a,b);
        divide(+a, +b);
        userInput.finalScore = +display.textContent;
    }
}

function inputNumbers(e) {
    let choice = e.target.id;
    const display = document.querySelector("#shownumbers");
    display.textContent = String(display.textContent).substr(0, 12);
    if (display.textContent == 0 || display.textContent == "+" || display.textContent == "-" ||
    display.textContent == "*" || display.textContent == "/"){
        display.textContent = choice;
    }
    else {
        display.textContent += choice;
    }
}

function clearInput() {
    const display = document.querySelector("#shownumbers");
    delete userInput.fNum;
    delete userInput.sNum;
    display.textContent = "0";
}

function numberOne(e) {
    if(!isNaN(userInput.fNum) && userInput.sNum == undefined) {
        userInput.sNum = +display.innerText;
        operator(userInput.choice, userInput.fNum, userInput.sNum);
        userInput.choice = e.target.id;
        showChoice(userInput.choice);
    }
    else if(!isNaN(userInput.fNum) && !isNaN(userInput.sNum)) {
        userInput.sNum = +display.innerText;
        operator(userInput.choice, userInput.fNum, userInput.sNum);
        userInput.choice = e.target.id;
        showChoice(userInput.choice);
    }
    else {
        userInput.choice = e.target.id;
        isNumber();
        showChoice(userInput.choice);
    }
    console.log(userInput.fNum); console.log(userInput.sNum);
}

function isNumber() {
    if(!isNaN(userInput.fNum)) {
        userInput.sNum = +display.innerText;
        operator(userInput.choice, userInput.fNum, userInput.sNum);
    }
    else {
        userInput.fNum = +display.innerText;
    }
}

function showChoice(choice) {
    switch (choice) {
        case "add":
           return display.textContent = adds;
        case "subtract":
            return display.textContent = subtracts;
        case "multiply":
            return display.textContent = multiplys;
        case "divide":
            return display.textContent = divides;
    }
}


function finalEqual() {
    if (userInput.choice === undefined){
        display.innerText = "0";
    }
    else {
        userInput.sNum = +display.textContent;
        operator(userInput.choice, userInput.fNum, userInput.sNum);
        display.textContent = userInput.fNum;
        display.textContent = String(display.textContent).substr(0, 12);
    }
    console.log(userInput.fNum); console.log(userInput.sNum);
}

