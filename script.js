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
let disNum = {};


keyClear.addEventListener("click", clearInput);
keys.forEach(key => key.addEventListener("click", inputNumbers));
zeroKey.addEventListener("click", inputNumbers);

addKeys.addEventListener("click", futureEqual);
addKeys.addEventListener("click", numberOne);

subKeys.addEventListener("click", futureEqual);
subKeys.addEventListener("click", numberOne);

multKeys.addEventListener("click", futureEqual);
multKeys.addEventListener("click", numberOne);

divKey.addEventListener("click", futureEqual);
divKey.addEventListener("click", numberOne);

equalKey.addEventListener("click", finalEqual);


function add(a, b){
    if(disNum.score === undefined) {
        disNum.finalEq = a + b;
    }
    else {
        disNum.finalEq += a;
        display.textContent = disNum.finalEq;
    }

}

function subtract(a, b) {
    disNum.score = a - b;
    display.textContent = disNum.score;
    display.textContent = String(display.textContent).substr(0, 12);
    return disNum.score;
}

function multiply(a, b) {
    disNum.score = a * b;
    display.textContent = disNum.score;
    display.textContent = String(display.textContent).substr(0, 12);
    return disNum.score;
}

function divide(a, b) {
    disNum.score = a / b;
    display.textContent = disNum.score;
    display.textContent = String(display.textContent).substr(0, 12);
    return disNum.score;
}

function operator(choice) {
    let a;
    let b;
    if(disNum.score === undefined) {
        a = disNum.fNum;
        b = disNum.sNum;
    }
    else if(disNum.sNum === undefined){ 
        a = disNum.score;
        b = disNum.fNum;
    }
    else {
        a = disNum.score;
        b = disNum.sNum;
    }
    if (isNaN(a)) {
        a = 0;
    }
    else if (isNaN(b)) {
        b = a;
    }
    if (choice == "add") {
        console.log(a,b);
        add(a, b);
    }
    else if(choice == "subtract") {
        console.log(a,b);
        subtract(+a, +b);
        disNum.finalScore = +display.textContent;
    }
    else if(choice == "multiply"){
        console.log(a,b);
        multiply(+a, +b);
        disNum.finalScore = +display.textContent;
    }
    else if(choice == "divide"){
        console.log(a,b);
        divide(+a, +b);
        disNum.finalScore = +display.textContent;
    }
}


function futureEqual(e){
    choice = e.target.id;
}

function inputNumbers(e) {
    const choice = e.target.id;
    const display = document.querySelector("#shownumbers");
    display.textContent = String(display.textContent).substr(0, 12);
    if (display.textContent == 0 || display.textContent == "+" || display.textContent == "-" ||
    display.textContent == "*" || display.textContent == "/" || !isNaN(disNum.finalScore)){
        display.textContent = choice;
        delete disNum.finalScore;
    }
    else {
        display.textContent += choice;
    }
}

function clearInput() {
    const display = document.querySelector("#shownumbers");
    delete disNum.fNum;
    delete disNum.sNum;
    delete disNum.finalScore;
    display.textContent = "0";
}

function numberOne(e) {
    isNumber();
    showChoice(choice)
    console.log(disNum.fNum); console.log(disNum.sNum); console.log (disNum.score);
}

function isNumber() {
    if (disNum.fNum === undefined){
        disNum.fNum = +display.innerText;
    }
    else if(!isNaN(disNum.fNum && disNum.sNum) || disNum.sNum === undefined){
        disNum.sNum = +display.innerText;
        if (choice == "add") {
            if(disNum.score === undefined) {
                disNum.score = disNum.fNum + disNum.sNum;
                delete disNum.sNum;
            }
            else {
                disNum.score += disNum.sNum;
            }
        }
        else if (choice == "subtract") {
            if(disNum.score === undefined) {
                disNum.score = disNum.fNum - disNum.sNum;
                delete disNum.sNum;
            }
            else {
                disNum.score -= disNum.sNum;
            }
        }
        else if (choice == "multiply") {
            if(disNum.score === undefined) {
                disNum.score = disNum.fNum * disNum.sNum;
                delete disNum.sNum;
            }
            else {
                disNum.score *= disNum.sNum;
            }
        }
        else if (choice == "divide") {
            if(disNum.score === undefined) {
                disNum.score = disNum.fNum / disNum.sNum;
                delete disNum.sNum;
            }
            else {
                disNum.score /= disNum.sNum;
            }
        }
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
    if (choice === undefined){
        display.innerText = "0";
    }
    else {
        operator(choice);
    }
}

