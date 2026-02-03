//calculator practice
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEl = document.getElementById("sum-el")
let resultEl = document.getElementById("result-el")
function add() {
    console.log(num1 + num2)
    sumEl.textContent = num1 + num2
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
    resultEl.textContent = "Result: " + (num1 + num2)
}

function subtract(){
    console.log(num1 - num2)
    sumEl.textContent = num1 - num2
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
    resultEl.textContent = "Result: " + (num1 - num2)
}

function divide(){
    console.log(num1 / num2)
    sumEl.textContent = num1 / num2
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
    resultEl.textContent = "Result: " + (num1 / num2)
}

function multiply(){
    console.log(num1 * num2)
    sumEl.textContent = num1 * num2
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
    resultEl.textContent = "Result: " + (num1 * num2)
}