//document.getElementById("count-el").innerText = 5

//let count = 5
//count = count + 1
//console.log(count)

//bonusPoints = 50
//console.log(bonusPoints)

//bonusPoints = bonusPoints + 50
//console.log(bonusPoints)

//bonusPoints = bonusPoints - 75
//console.log(bonusPoints)

//bonusPoints = bonusPoints + 45
//console.log(bonusPoints)

//function increment() {
    //console.log("The button was clicked")
//}

//function dec(){
  //  console.log(42)
//}

//dec()

//function lapTime() {
   // let lap1 = 34
 //   let lap2 = 33
//    let lap3 = 36
//    let totalTime = lap1 + lap2 + lap3
//    console.log(totalTime)
//}
//lapTime()

//let //lapsCompleted = 0
//function increment() {
   // lapsCompleted = lapsCompleted + 1
  //  console.log(lapsCompleted)
//}
//increment()
//increment()
//increment()
//console.log(lapsCompleted)


//let count = 0
//function increment() {
    //console.log("The button was clicked")
  //  count = count + 1
   // console.log(count)
//}
 let countEl = document.getElementById("count-el") //camelCase
 console.log(countEl)

    let count = 0
    function increment() {
        count = count + 1
        countEl.innerText = count
        console.log(count)
    }
let countEL = document.getElementById("count-el") //camelCase
    function decrement() {
        count = count - 1
        countEl.innerText = count
        console.log(count)
    }

    function save() {
        console.log(count)
    }
    save()

let username = "wachira"
let message = "you have three new notifications"
//console.log(message + ","+ username +"!")

let messageToUser = message + "," + username + "!"
console.log(messageToUser)
