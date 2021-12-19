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
    console.log(userInput.array1);
}

function subtract() {
    let finalnumber = userInput.array1.reduce(subtracting);
    display.textContent = finalnumber;
    userInput.array1[0] = finalnumber;
    userInput.array1.splice(1);
    console.log(userInput.array1);
}

function multiply() {
    let finalnumber = userInput.array1.reduce(multiplying);
    display.textContent = finalnumber;
    userInput.array1[0] = finalnumber;
    userInput.array1.splice(1);
    console.log(userInput.array1);
}

function divide() {
    let finalnumber = userInput.array1.reduce(dividing);
    display.textContent = finalnumber;
    userInput.array1[0] = finalnumber;
    userInput.array1.splice(1);
    console.log(userInput.array1);
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

function operatorIn(e) {
    choice = e.target.id;
    if (userInput.array1.length > 1) {
        operator(choice);
    }
    else if(userInput.array1.length == 1){
        
    }
    else {
        userInput.array1.push(+display.textContent);
        showChoice(choice);
    }
    console.log(userInput.array1); console.log(userInput.array1);
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
    userInput.array1.push(+display.textContent);
    operator(choice);
    display.textContent = String(display.textContent).substr(0, 12);
    console.log(userInput.fNum); console.log(userInput.sNum);
}

