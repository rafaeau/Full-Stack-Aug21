
let bingoBoard = {}
const displayNumbers = function() {
let numbersContainerNode = document.getElementById('numbers-container')

for (let numbers = 1; numbers <=76; numbers++) {
    let newNumber = document.createElement('div')
    newNumber.innerText = numbers
    newNumber.id = numbers
    newNumber.classList.add('numbers')

    numbersContainerNode.appendChild(newNumber)
    }
}

function createRandom() {
    return Math.floor(Math.random() * 76 + 1)
}
/* 
let numberBox = document.getElementsByName('number');
numberBox.classList.add('highlight'); */

function highlightRandom () {
    const randomNumber = createRandom()
    document.getElementById(randomNumber).style.border = "3px solid red"
}


createRandom()



/* function assimilateNumber(){
    
    let result = ""

    for(let i = 0; i < numbers.length; i ++){
    
        let  = numbers[i]
} */

window.onload = function() {
    displayNumbers()
}