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

let playerOneChoice: string
let playerTwoChoice: string
let result: string

// Functions for clicking on rock, paper, or scissors
function clickOnRockPlayerOne() {
  playerOneChoice = 'rock'
  console.log(playerOneChoice)
}
playerOneRock?.addEventListener('click', clickOnRockPlayerOne)

function clickOnPaperPlayerOne() {
  playerOneChoice = 'paper'
  console.log(playerOneChoice)
}
playerOnePaper?.addEventListener('click', clickOnPaperPlayerOne)

function clickOnScissorsPlayerOne() {
  playerOneChoice = 'scissors'
  console.log(playerOneChoice)
}
playerOneScissors?.addEventListener('click', clickOnScissorsPlayerOne)

function clickOnRockPlayerTwo() {
  playerTwoChoice = 'rock'
  console.log(playerTwoChoice)
}
playerTwoRock?.addEventListener('click', clickOnRockPlayerTwo)

function clickOnPaperPlayerTwo() {
  playerTwoChoice = 'paper'
  console.log(playerTwoChoice)
}
playerTwoPaper?.addEventListener('click', clickOnPaperPlayerTwo)

function clickOnScissorsPlayerTwo() {
  playerTwoChoice = 'scissors'
  console.log(playerTwoChoice)
}
playerTwoScissors?.addEventListener('click', clickOnScissorsPlayerTwo)

// Display winner
