/* get the computer's submission */

        

/* get the human's submission */

        

// compare the two

        function playRound(){

            var humanScore=0
            var compScore=0
            var ties=0

            function getCompChoice() {
                var num = Math.random();
                if (num < 0.3333){return "rock"}
                else if (num < 0.6666) {return "paper"}
                else {return "scissors"}
                }

            let compChoice = getCompChoice()
            console.log(`the computer throws ${compChoice}`)

            function getHumanChoice(){
                var choice = prompt("Rock, Paper, or Scissors?");
                return choice;
                }

            let humanChoice = getHumanChoice();

            console.log(`the human throws ${humanChoice}`)
            
            // logic for comparing the choices and keeping score
                if (humanChoice === "rock" & compChoice === "scissors"){
                    console.log("Human wins this round!");
                    humanScore++}
                else if(humanChoice === "paper" & compChoice === "rock"){
                    console.log("Human wins this round!");
                    humanScore++}
                else if(humanChoice === "scissors" & compChoice === "paper"){
                    console.log("Human wins this round")
                    humanScore++}
                else if(humanChoice===compChoice)
                    {console.log("Its a tie!");
                    ties++}
                else
                    {console.log("Computer wins this round!")
                    compScore++;}
            console.log(`The score is human ${humanScore}, computer ${compScore}, and ${ties} ties.`)

        }

        playRound()
// play a game
// update the score
// replay several times


