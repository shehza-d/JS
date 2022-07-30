// difference between FOR and WHILE Loop
// modal
// let i = 0;

// let test = confirm("are you alright?")
// console.log(test)

// let isPlayAgain =true;
// while (let isPlayAgain){
// for (let isPlayAgain;;){
//     console.log(`Shehzad`)
//     isPlayAgain = confirm("Do you want to play again ?")
// }

//Guess Game

do {
    let randomNumber = Math.round(Math.random() * 10) + 1;
    console.log(randomNumber)
    let userInput = Number(prompt("Enter a random number"));

    if (randomNumber == userInput) {
        alert("You gussed right number!");
    } else {
        alert("You gussed wrong number!");
    }
} while (confirm("Do you want to Play again!"))
