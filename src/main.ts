import './style.css'

console.clear()

// Player one selects throw
const playerOneRock = document.querySelector('.player1 i.rock')
const playerOnePaper = document.querySelector('.player1 i.paper')
const playerOneScissors = document.querySelector('.player1 i.scissors')
const playerOneLizard = document.querySelector('.player1 i.lizard')
const playerOneSpock = document.querySelector('.player1 i.spock')

// Player two selects throw
const playerTwoRock = document.querySelector('.player2 i.rock')
const playerTwoPaper = document.querySelector('.player2 i.paper')
const playerTwoScissors = document.querySelector('.player2 i.scissors')
const playerTwoLizard = document.querySelector('.player2 i.lizard')
const playerTwoSpock = document.querySelector('.player2 i.spock')

const displayWinner = document.querySelector('header h2')
const displayWhyWinner = document.querySelector('header h5')

const fireworks = document.querySelector('header div')

let playerOneChoice: string
let playerTwoChoice: string
let result: string
let resultExplanation: string

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

// Added player one lizard and spock
function clickOnLizardPlayerOne() {
  playerOneChoice = 'lizard'
  console.log(playerOneChoice)
  // returnWinner()
  // console.log(returnWinner)
}
playerOneLizard?.addEventListener('click', clickOnLizardPlayerOne)

function clickOnSpockPlayerOne() {
  playerOneChoice = 'spock'
  console.log(playerOneChoice)
  // returnWinner()
  // console.log(returnWinner)
}
playerOneSpock?.addEventListener('click', clickOnSpockPlayerOne)

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

// Added player two lizard and spock
function clickOnLizardPlayerTwo() {
  playerTwoChoice = 'lizard'
  console.log(playerTwoChoice)
  returnWinner()
  console.log(returnWinner)
}
playerTwoLizard?.addEventListener('click', clickOnLizardPlayerTwo)

function clickOnSpockPlayerTwo() {
  playerTwoChoice = 'spock'
  console.log(playerTwoChoice)
  returnWinner()
  console.log(returnWinner)
}
playerTwoSpock?.addEventListener('click', clickOnSpockPlayerTwo)

// Display winner
function returnWinner() {
  if (playerOneChoice === playerTwoChoice) {
    result = "✨ It's a draw❕ Prepare your wands to duel again❕✨"
    resultExplanation = ''
    displayWinner!.innerHTML = result
    displayWhyWinner!.innerHTML = resultExplanation
    return
  }
  if (playerOneChoice === 'rock' && playerTwoChoice === 'scissors') {
    result = '✨ Witch 1 wins❕✨'
    resultExplanation = 'Rock crushes Scissors'
  }
  if (playerOneChoice === 'rock' && playerTwoChoice === 'paper') {
    result = '✨ Witch 2 wins❕✨'
    resultExplanation = 'Paper covers Rock'
  }
  if (playerOneChoice === 'rock' && playerTwoChoice === 'lizard') {
    result = '✨ Witch 1 wins❕✨'
    resultExplanation = 'Rock crushes Lizard'
  }
  if (playerOneChoice === 'rock' && playerTwoChoice === 'spock') {
    result = '✨ Witch 2 wins❕✨'
    resultExplanation = 'Spock vaporizes Rock'
  }
  if (playerOneChoice === 'paper' && playerTwoChoice === 'rock') {
    result = '✨ Witch 1 wins❕✨'
    resultExplanation = 'Paper covers Rock'
  }
  if (playerOneChoice === 'paper' && playerTwoChoice === 'scissors') {
    result = '✨ Witch 2 wins❕✨'
    resultExplanation = 'Scissors cut Paper'
  }
  if (playerOneChoice === 'paper' && playerTwoChoice === 'lizard') {
    result = '✨ Witch 2 wins❕✨'
    resultExplanation = 'Lizard eats Paper'
  }
  if (playerOneChoice === 'paper' && playerTwoChoice === 'spock') {
    result = '✨ Witch 1 wins❕✨'
    resultExplanation = 'Paper disproves Spock'
  }
  if (playerOneChoice === 'scissors' && playerTwoChoice === 'rock') {
    result = '✨ Witch 2 wins❕✨'
    resultExplanation = 'Rock crushes Scissors'
  }
  if (playerOneChoice === 'scissors' && playerTwoChoice === 'paper') {
    result = '✨ Witch 1 wins❕✨'
    resultExplanation = 'Scissors cut Paper'
  }
  if (playerOneChoice === 'scissors' && playerTwoChoice === 'lizard') {
    result = '✨ Witch 1 wins❕✨'
    resultExplanation = 'Scissors decapitate Lizard'
  }
  if (playerOneChoice === 'scissors' && playerTwoChoice === 'spock') {
    result = '✨ Witch 2 wins❕✨'
    resultExplanation = 'Spock smashes Scissors'
  }
  if (playerOneChoice === 'lizard' && playerTwoChoice === 'rock') {
    result = '✨ Witch 2 wins❕✨'
    resultExplanation = 'Rock cruses Lizard'
  }
  if (playerOneChoice === 'lizard' && playerTwoChoice === 'paper') {
    result = '✨ Witch 1 wins❕✨'
    resultExplanation = 'Lizard eats Paper'
  }
  if (playerOneChoice === 'lizard' && playerTwoChoice === 'scissors') {
    result = '✨ Witch 2 wins❕✨'
    resultExplanation = 'Scissors decapitate Lizard'
  }
  if (playerOneChoice === 'lizard' && playerTwoChoice === 'spock') {
    result = '✨ Witch 1 wins❕✨'
    resultExplanation = 'Lizard poisons Spock'
  }
  if (playerOneChoice === 'spock' && playerTwoChoice === 'rock') {
    result = '✨ Witch 1 wins❕✨'
    resultExplanation = 'Spock vaporizes Rock'
  }
  if (playerOneChoice === 'spock' && playerTwoChoice === 'paper') {
    result = '✨ Witch 2 wins❕✨'
    resultExplanation = 'Paper disproves Spock'
  }
  if (playerOneChoice === 'spock' && playerTwoChoice === 'scissors') {
    result = '✨ Witch 1 wins❕✨'
    resultExplanation = 'Spock smashes Scissors'
  }
  if (playerOneChoice === 'spock' && playerTwoChoice === 'lizard') {
    result = '✨ Witch 2 wins❕✨'
    resultExplanation = 'Lizard poisons Spock'
  }
  displayWinner!.innerHTML = result
  displayWhyWinner!.innerHTML = resultExplanation
  document.getElementById('fireworks')!.classList.remove('hide-fireworks')
}

// Reset button
const resetButton = document.querySelector('aside div')

function clickOnResetButton() {
  if (displayWinner) {
    displayWinner!.innerHTML = "Everyone's wand at the ready?"
  }
  if (displayWhyWinner) {
    displayWhyWinner!.innerHTML = ''
  }
  document.getElementById('fireworks')!.classList.add('hide-fireworks')
}
resetButton?.addEventListener('click', clickOnResetButton)

// Fireworks
