document.getElementById("count-el").innerText
let count = 0

let countEl = document.getElementById("count-el") //camelCase
    function increment() {
       count += 1
    countEl.innerText = count
        console.log(count)
}
    
let countEL = document.getElementById("count-el") //camelCase
    function decrement() {
        count -= 1
    countEl.innerText = count
        console.log(count)
}  

function save() {
        let saveEl = document.getElementById("save-el")
        let countStr = count + " - "
        saveEl.textContent += countStr
        countEL.textContent = 0
        count = 0
}
save()

//Welcome message
WelcomeEL = document.getElementById("welcome-el")
let name = "Wachira";
let greeting = "Welcome back";
WelcomeEL.innerText = greeting + ", " + name;

WelcomeEL.innerText = WelcomeEL.innerText + " 👋" //added emoji

WelcomeEL.innerText += " 👋" //shorthand way to add emoji


