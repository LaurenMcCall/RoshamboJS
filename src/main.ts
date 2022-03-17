import './style.css'

console.clear()

// Player one selects throw
const playerOneRock = document.querySelector('.player1 i.rock')
const playerOnePaper = document.querySelector('.player1 i.paper')
const playerOneScissors = document.querySelector('.player1 i.scissors')

// Player two selects throw
const playerTwoRock = document.querySelector('.player2 i.rock')
const playerTwoPaper = document.querySelector('.player2 i.paper')
const playerTwoScissors = document.querySelector('.player2 i.scissors')

const displayWinner = document.querySelector('header h2')

let playerOneChoice: string
let playerTwoChoice: string
let result: string

// Functions for clicking on rock, paper, or scissors
function clickOnRockPlayerOne() {
  playerOneChoice = 'rock'
  console.log(playerOneChoice)
  // QUESTION: Only way to not have player one return a winner until after player two
  // selects is to remove the below. is there a way to make it so whichever player
  // goes last/second the winner is returned?
  // returnWinner()
  // console.log(returnWinner)
}
playerOneRock?.addEventListener('click', clickOnRockPlayerOne)

function clickOnPaperPlayerOne() {
  playerOneChoice = 'paper'
  console.log(playerOneChoice)
  // returnWinner()
  // console.log(returnWinner)
}
playerOnePaper?.addEventListener('click', clickOnPaperPlayerOne)

function clickOnScissorsPlayerOne() {
  playerOneChoice = 'scissors'
  console.log(playerOneChoice)
  // returnWinner()
  // console.log(returnWinner)
}
playerOneScissors?.addEventListener('click', clickOnScissorsPlayerOne)

function clickOnRockPlayerTwo() {
  playerTwoChoice = 'rock'
  console.log(playerTwoChoice)
  returnWinner()
  console.log(returnWinner)
}
playerTwoRock?.addEventListener('click', clickOnRockPlayerTwo)

function clickOnPaperPlayerTwo() {
  playerTwoChoice = 'paper'
  console.log(playerTwoChoice)
  returnWinner()
  console.log(returnWinner)
}
playerTwoPaper?.addEventListener('click', clickOnPaperPlayerTwo)

function clickOnScissorsPlayerTwo() {
  playerTwoChoice = 'scissors'
  console.log(playerTwoChoice)
  returnWinner()
  console.log(returnWinner)
}
playerTwoScissors?.addEventListener('click', clickOnScissorsPlayerTwo)

// Display winner
function returnWinner() {
  if (playerOneChoice === playerTwoChoice) {
    result = "✨ It's a draw❕ Prepare your wands to duel again❕✨"
  }
  if (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') {
    result = '✨Witch 1 wins!✨'
  }
  if (playerOneChoice === 'rock' && playerTwoChoice === 'paper') {
    result = '✨Witch 2 wins!✨'
  }
  if (playerOneChoice === 'paper' && playerTwoChoice === 'rock') {
    result = '✨Witch 1 wins!✨'
  }
  if (playerOneChoice === 'paper' && playerTwoChoice === 'scissors') {
    result = '✨Witch 2 wins!✨'
  }
  if (playerOneChoice === 'scissors' && playerTwoChoice === 'rock') {
    result = '✨Witch 2 wins!✨'
  }
  if (playerOneChoice === 'scissors' && playerTwoChoice === 'paper') {
    result = '✨Witch 1 wins!✨'
  }
  displayWinner!.innerHTML = result
}

// Reset button
const resetButton = document.querySelector('aside div')

function clickOnResetButton() {
  if (displayWinner) {
    displayWinner!.innerHTML = "Everyone's wand at the ready?"
  }
}
resetButton?.addEventListener('click', clickOnResetButton)
