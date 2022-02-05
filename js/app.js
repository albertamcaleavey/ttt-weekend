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
      }
    }

    // changes the h2 element to display a message depending on the state of the game

    // MIGHT NEED TO COME BACK TO THIS !!!!!
    if(!winner){
      gameStatus.textContent = `It's ${playerName()}'s turn!` 
    } else if(winner === "T") {
       gameStatus.textContent = "It's a tie!" 
    } else {
         gameStatus.textContent = `Congratulations! ${playerName()} won!`
    }
    // USING TEMPLATE LITERALS 
    // if(!winner){
    //   gameStatus.textContent = `It's ${playerName()}'s turn!` 
    // } else {
    //   winner === "T" ? gameStatus.textContent = "It's a tie!" : gameStatus.textContent = `Congratulations! ${playerName()} won!`
    // }

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
    [boardArray[0], boardArray[1], boardArray[2]],
    [boardArray[3], boardArray[4], boardArray[5]],
    [boardArray[6], boardArray[7], boardArray[8]],
    [boardArray[0], boardArray[3], boardArray[6]],
    [boardArray[1], boardArray[4], boardArray[7]],
    [boardArray[2], boardArray[5], boardArray[8]],
    [boardArray[0], boardArray[4], boardArray[8]],
    [boardArray[2], boardArray[4], boardArray[6]],
  ]
  

  // winCombos = [
  //   [squares[0], squares[1], squares[2]],
  //   [squares[3], squares[4], squares[5]],
  //   [squares[6], squares[7], squares[8]],
  //   [squares[0], squares[3], squares[6]],
  //   [squares[1], squares[4], squares[7]],
  //   [squares[2], squares[5], squares[8]],
  //   [squares[0], squares[4], squares[8]],
  //   [squares[2], squares[4], squares[6]],
  // ]



// HANDLE CLICK FUNCTION - when a square is clicked

function handleClick(evt){
  // find the id of the element that was clicked 
  let clickedSquare = evt.target.id
  // turn its id into a number
  // this number corresponds to an index which = a spot on the board in the board Array
  let sqIdx = parseInt(clickedSquare.split('').splice(2, 2).join(''))
  // console.log(sqIdx)
  
  // if the board has a value at that index (index of the element that was clicked), return
if(boardArray[sqIdx] !== null){
  return
}  
// if there is a winner, return
 else if (winner !== null){
  return 
}

// update board array at the index, with the value of turn
else {
  boardArray[sqIdx] = turn
}
// change turn 
turn = turn * -1
// console.log(boardArray)
render()

getWinner()
}

function getWinner(){
  // loop through each of the winning combos- each array in the winCombos array
  winCombos.forEach(function(array){
    // total up the three board positions using the three indexes in the current combo
    let total = array[0] + array[1] + array[2]
    console.log(total)
    // convert the total to an absolute value (convert any negative total to positive)
    if(total < 0) {
      total = total * -1
    }
    if(total === 3){
      winner = array[0]
    }
  })
  

  

  // if the total equals 3, we have a winner! set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

  //
}






// TO DO:
// 1. figure out where the const array of possible winning options should go 