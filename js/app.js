/*-------------------------------- Constants --------------------------------*/
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]


/*---------------------------- Variables (state) ----------------------------*/
let boardArray
let turn
let winner 
let winnerName

/*------------------------ Cached Element References ------------------------*/
let squares = document.querySelectorAll('.square')

let gameStatus = document.getElementById('message')


/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('.board').addEventListener('click', handleClick)

document.getElementById('replay').addEventListener('click', init, render)

/*-------------------------------- Functions --------------------------------*/
  // INITIALIZE FUNCTION

    init()

    function init(){
      boardArray = [null, null, null, null, null, null, null, null, null]
      turn = 1
      winner = null
      render()
    }


   // RENDER FUNCTION
   function render() {
    for(let i = 0; i < boardArray.length; i++){
      // displays an X or O on the spot on the board that corresponds to the current index, depending on the value of that index
      if(boardArray[i] === -1){
        squares[i].textContent = 'O'
      } else if(boardArray[i] === 1) {
        squares[i].textContent = 'X'
      } else{
        squares[i].textContent = ''
      }
    }
    // renders a message about the state of the game 
    if(winner === null){
      gameStatus.textContent = `It's ${playerName()}'s turn!` 
    } else if(winner === "T") {
       gameStatus.textContent = "It's a tie!" 
    } else {
         gameStatus.textContent = `Congratulations! ${winnerName} won!`
    }
    // sets player names to the values being used: 1 and -1
    function playerName(){
      if(turn === -1) {
        return "O"
      } else if(turn === 1){
        return "X"
      }
    }
  } 
 

// HANDLE CLICK FUNCTION 
  // what happens when a square is clicked

function handleClick(evt){
  // finds the id of the element that was clicked 
  let clickedSquare = evt.target.id
  // converts the id string into a number
    // this number is the same as its index in boardArray, which refers to its spot on the board
  let sqIdx = parseInt(clickedSquare.split('').splice(2, 2).join(''))
  // returns if the board already has a value at that index
  // returns if there is a winner
if(boardArray[sqIdx] !== null){
  return
}  else if (winner !== null){
  return 
} else {
// updates boardArray at the current index with the value of turn , so either an X or O will be displayed on the square that was clicked, depending on whose turn it is
  boardArray[sqIdx] = turn
}
// changes turn 
turn = turn * -1
// updates the state of the game
render()
// checks if there is a winner 
getWinner()
}

function getWinner(){
  // loops through winCombos array
 winCombos.forEach(function(combo){
   const a = combo[0]
   const b = combo[1]
   const c = combo[2]
  // checks if three squares that make up a winning combination are occupied
   if(Math.abs(boardArray[a] + boardArray[b] + boardArray[c]) === 3){
     // sets the winner to either X or O, depending on the value of the first element in the current winCombos array  
     winner = boardArray[a]
    // checks if every square on the board is occupied and if so, sets winner to tie
   } else if (boardArray.every(function(element){
     return element !== null
   })){
     winner = "T"
   } else {
     return null
   }
   // sets winner's name to display in the render message
   if(winner === 1){
     winnerName = 'X'
   }
   if(winner === -1){
     winnerName = 'O'
   }
render()
 })
}
