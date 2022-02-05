/*-------------------------------- Constants --------------------------------*/
let winCombos = []


/*---------------------------- Variables (state) ----------------------------*/
let boardArray
// 1.1) Use an array to represent the squares on the board.
let turn
// 1.2) Use a turn variable to track whose turn it is.
let winner 
// 1.3) Use a winner variable to represent three different game states:
	  // a player that won
	  // a tie has occured
	  // or a game that is still in play.
/*------------------------ Cached Element References ------------------------*/

  let squares = document.querySelectorAll('.square')
  // a node list containing each element with a class of square= all of the (divs) squares

  let gameStatus = document.getElementById('message')
  // the h2 element 


/*----------------------------- Event Listeners -----------------------------*/
// squares.forEach(function(square){
//   square.addEventListener('click', handleClick())
// })

document.querySelector('.board').addEventListener('click', handleClick)


// when any of the elements in section (the div squares) are clicked, handleClick function is invoked
  // this uses bubbling 


/*-------------------------------- Functions --------------------------------*/
  // INITIALIZE FUNCTION

    init()

    function init(){
      // resets the game 
      boardArray = [null, null, null, null, null, null, null, null, null]
      // console.log(boardArray)
      turn = 1
      winner = null
      render()
    }


   // RENDER FUNCTION
   function render() {
    for(let i = 0; i < boardArray.length; i++){
      // the squares will change color depending on their value (depending on if they're occupied by player 1, 2 or not occupied)
      // let currentSquare = boardArray[i]
      if(boardArray[i] === -1){
        squares[i].textContent = 'O'
      } else if(boardArray[i] === 1) {
        squares[i].textContent = 'X'
      } else{
        squares[i].textContent = ''
        // change to remaining the same as the background color
      }
    }

    // changes the h2 element to display a message depending on the state of the game

    // MIGHT NEED TO COME BACK TO THIS !!!!!
    if(winner === null){
      gameStatus.textContent = `It's ${playerName()}'s turn!` 
    } else {
      winner === "T" ? gameStatus.textContent = "It's a tie!" : gameStatus.textContent = `Congratulations! ${playerName()} won!`
    }

    // sets player names to the values being used- 1 and -1
    // MAY NEED TO SWITCH PLAYER X AND O 
    function playerName(){
      if(turn === -1) {
        return "Player O"
      } else if(turn === 1){
        return "Player X"
      }
    }
  } 
  // const array of arrays that includes all possible winning  combinations 

  // figure out how to put this in the const area above 
  winCombos = [
    [squares[0], squares[1], squares[2]],
    [squares[3], squares[4], squares[5]],
    [squares[6], squares[7], squares[8]],
    [squares[0], squares[3], squares[6]],
    [squares[1], squares[4], squares[7]],
    [squares[2], squares[5], squares[8]],
    [squares[0], squares[4], squares[8]],
    [squares[2], squares[4], squares[6]],
  ]
  

// HANDLE CLICK FUNCTION - when a square is clicked

function handleClick(evt){
  // find the id of the element that was clicked 
  let clickedSquare = evt.target.id
  // turn its id into a number, which corresponds to each spot on the board in the board Array
  let sqIdx = parseInt(clickedSquare.split('').splice(2, 2).join(''))
  console.log(sqIdx)
  
  
  // if the board has a value at that index (index of the element that was clicked), return
if(boardArray[sqIdx] !== null){
  return
}  
// if there is a winner, return
if (winner !== null){
  return 
}

// update board array at the index, with the value of turn
boardArray[sqIdx] = turn

// change turn 
turn = turn * -1
// console.log(boardArray)

getWinner()
}

function getWinner(){
  
}



// TO DO:
// 1. figure out where the const array of possible winning options should go 