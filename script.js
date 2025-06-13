/* get the computer's submission */

        

/* get the human's submission */

        

// compare the two

       

            var humanScore=0
            var compScore=0
            var ties=0

            function getCompChoice() {
                var num = Math.random();
                if (num < 0.3333){return "rock"}
                else if (num < 0.6666) {return "paper"}
                else {return "scissors"}
                }

            function getHumanChoice(){
                var choice = prompt("Rock, Paper, or Scissors?");
                return choice;
                }

            function playround(){
                let humanThrow = getHumanChoice()
                console.log(`The human throws ${humanThrow}!`)
                let compThrow = getCompChoice();
                console.log(`The computer throws ${compThrow}`);
                if (humanThrow === "rock" & compThrow === "scissors"){
                    console.log("Human wins this round!");
                    humanScore++}
                else if(humanThrow === "paper" & compThrow === "rock"){
                    console.log("Human wins this round!");
                    humanScore++}
                else if(humanThrow === "scissors" & compThrow === "paper"){
                    console.log("Human wins this round")
                    humanScore++}
                else if(humanThrow===compThrow)
                    {console.log("Its a tie!");
                    ties++}
                else
                    {console.log("Computer wins this round!")
                    compScore++;}
                console.log(`The score is human ${humanScore}, computer ${compScore}, and ${ties} ties.`)}


function playGame(){
    playround()
    playround()
    playround()
    playround()
    playround()
    if (humanScore>compScore){alert("Human wins the set!")}
    else if(compScore>humanScore){alert("Computer wins the set!")}
    else{alert("Its a tie! Play again you coward!")}
}

playGame()
        

        
// play a game
// update the score
// replay several times


