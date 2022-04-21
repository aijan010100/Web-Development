let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10)
}

const compareGuesses = (human, computer, target) => {
    const humanDiff = Math.abs(target - human)
    const computerDiff = Math.abs(target - computer) 
    if(humanDiff <= computerDiff) {
        return true
    } else {
        return false
}
}


const updateScore = winner => {
  winner === 'human' ? humanScore += 1 : computerScore += 1
}

const advanceRound = () => {
  currentRoundNumber +=1
}
