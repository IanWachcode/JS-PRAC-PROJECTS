let firstCard = 7
let secondCard = 20
let sum = firstCard + secondCard
let hasBlkJck = false
let isAlive = true

if (sum <= 20) {
    console.log("Do you want to draw a new card?")
    hasBlkJck = false
} else if (sum === 21) {
    console.log("You've got BlackJack!")
    hasBlkJck = true
} else {
    console.log("you're out of the game!")
    isAlive = false
}

console.log(hasBlkJck)
console.log(isAlive)
// CASH OUT
