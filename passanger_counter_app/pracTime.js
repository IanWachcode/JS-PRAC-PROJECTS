let firstName = "Ian";

let secondName = "Wachira";

fullName = firstName + " " + secondName;

//console.log(fullName)

let name = "Linda";
let greeting = "Hi,there"

function greetLinda(){
    console.log(greeting+", "+name+"!")
}
//greetLinda()  //output Hi there Linda!

let myPoints = 3

function add3Points(){
   console.log(myPoints += 3)
}
//add3Points() //6
//add3Points() //9
//add3Points() //12

function remove1Point(){
    console.log(myPoints -= 1)
}
//remove1Point() //11
//remove1Point() //10

//console.log("2" + 2) //22
//console.log(11 + 7) //18
//console.log(6 + "5") //65
//console.log("My points: "+ 5 + 9) //my points: 59
//console.log(2 + 2) //4
//console.log("11" + "14") //1114

//Nikeshoechallange

let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log("button clicked")
    errorParagraph.textContent = "Somethting went wrong, Please try again"
}

