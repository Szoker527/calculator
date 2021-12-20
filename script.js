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
let equalNum = true;
let choice;
const adding = (previousValue, currentValue) => previousValue + currentValue;
const subtracting = (previousValue, currentValue) => previousValue - currentValue;
const multiplying = (previousValue, currentValue) => previousValue * currentValue;
const dividing = (previousValue, currentValue) => previousValue / currentValue;
let userInput = {
    array1: [],

};


keyClear.addEventListener("click", clearInput);
keys.forEach(key => key.addEventListener("click", inputNumbers));
zeroKey.addEventListener("click", inputNumbers);

addKeys.addEventListener("click", operatorIn);

subKeys.addEventListener("click", operatorIn);

multKeys.addEventListener("click", operatorIn);

divKey.addEventListener("click", operatorIn);

equalKey.addEventListener("click", finalEqual);


function add(){
    let finalnumber = userInput.array1.reduce(adding);
    display.textContent = finalnumber;
    userInput.array1[0] = finalnumber;
    userInput.array1.splice(1);
}

function subtract() {
    let finalnumber = userInput.array1.reduce(subtracting);
    display.textContent = finalnumber;
    userInput.array1[0] = finalnumber;
    userInput.array1.splice(1);
}

function multiply() {
    let finalnumber = userInput.array1.reduce(multiplying);
    display.textContent = finalnumber;
    userInput.array1[0] = finalnumber;
    userInput.array1.splice(1);
}

function divide() {
    let finalnumber = userInput.array1.reduce(dividing);
    display.textContent = finalnumber;
    userInput.array1[0] = finalnumber;
    userInput.array1.splice(1);
}

function operator(choice) {
    if (choice == "add") {
        add()
    }
    else if(choice == "subtract") {
        subtract();
    }
    else if(choice == "multiply"){
        multiply();
    }
    else if(choice == "divide"){
        divide();
    }
}


function inputNumbers(e) {
    let choice = e.target.id;
    const display = document.querySelector("#shownumbers");
    display.textContent = String(display.textContent).substr(0, 12);
    if (display.textContent == 0 || display.textContent == userInput.array1[0] || equalNum == false){
        display.textContent = choice;
        equalNum = true;
    }
    else {
        display.textContent += choice;
    }
}

function clearInput() {
    const display = document.querySelector("#shownumbers");
    userInput.array1.splice(0);
    display.textContent = "0";
}

function operatorIn(e) {
    if(userInput.array1.length == 1){
        equalNum = true;
        userInput.array1.push(+display.textContent);
        operator(choice);
        choice = e.target.id;
    }
    else {
        choice = e.target.id;
        userInput.array1.push(+display.textContent);
    }
}

function finalEqual() {
    if (equalNum == false) {
        display.textContent;
        userInput.array1.splice(0);
    }
    else {
        userInput.array1.push(+display.textContent);
        operator(choice);
        equalNum = false;
        userInput.array1.splice(0);
    }
    display.textContent = String(display.textContent).substr(0, 12);
}

