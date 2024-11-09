const ANS = document.getElementById("result");
const DEL = document.getElementById("backspace");
const DIV = document.getElementById("divide");
const MUL = document.getElementById("multiply");
const SUB = document.getElementById("subtract");
const ADD = document.getElementById("add");
const CAL = document.getElementById("calculate");

const allButtons = document.querySelectorAll("button");

const numbers = document.querySelectorAll(".numberB");
const operators = document.querySelectorAll(".operatorB");

let num1,op,num2;
var opSelected = false;

console.log(ANS);
console.log(DEL);
console.log(DIV);
console.log(MUL);
console.log(SUB);
console.log(ADD);
console.log(CAL);

allButtons.forEach(button => {
    console.log(num2);
});

numbers.forEach(button => {
    button.addEventListener("click", function() {
        if (button.textContent != ".")
            if (ANS.textContent == "0")
                ANS.textContent = "";
        if (opSelected)
            ANS.textContent = "";
        if (ANS.textContent.length < 10)
            ANS.textContent = ANS.textContent + button.textContent;
        opSelected = false;
    });
});

operators.forEach(button => {
    button.addEventListener("click", function() {
        if (button.textContent != "=") { /* USING OPERATOR */
            num1 = Number(ANS.textContent);
            op = button.textContent;
            console.log(op);
            opSelected = true;
        } else { /* CALCULATING */
            num2 = Number(ANS.textContent);
            switch (op) {
                case "÷":
                    ANS.textContent = num1 / num2;
                    break;
                case "×":
                    ANS.textContent = num1 * num2;
                    break;
                case "-":
                    ANS.textContent = num1 - num2;
                    break;
                case "+":
                    ANS.textContent = num1 + num2;
                    console.log("adding");
                    break;
                default: console.log("ERROR OCCURED!");
            }
            opSelected = true;
            op = "";
        }
    });
});

DEL.addEventListener("click", function() {
    ANS.textContent = "0";
});


