/* get the computer's submission */

function getCompChoice() {
   var num = Math.random();
   if (num < 0.3333){return "rock"}
   else if (num < 0.6666) {return "paper"}
   else {return "scissors"}
}

let compChoice = getCompChoice()
console.log(`the computer throws ${compChoice}`)
/* get the human's submission */

function getHumanChoice(){
    var choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}

let humanChoice = getHumanChoice();

console.log(`the human chose ${humanChoice}`)

// compare the two
// notify the human of the winner
// update the score
// replay several times


