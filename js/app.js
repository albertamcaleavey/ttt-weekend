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
      boardArray = [-1, 1, 1, null, null, -1, null, null, null]
      console.log(boardArray)
      turn = 1
      winner = null
      render()
    }


   // RENDER FUNCTION

   function render() {
    for(let i = 0; i < boardArray.length; i++){
      // the squares will change color depending on their value (depending on if they're occupied by player 1, 2 or not occupied)
      let currentSquare = boardArray[i]
      if(currentSquare === -1){
        squares[i].textConent = 'O'
      } if(currentSquare === 1) {
        squares[i].textContent = 'X'
      } else{
        squares[i].textContent= ''
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
    // MAY NEED TO SWITCH PLAYER 1 AND 2 
    function playerName(){
      if(turn === -1) {
        return "Player 1"
      } else if(turn === 1){
        return "Player 2"
      }
    }
  } 
  // const array of arrays that includes all possible winning combinations 
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
  
  let clickedSquare = evt.target.id
  parseInt(clickedSquare.split('').splice(2, 2).join(''))
  
  
  // if the board has a value at that index (index of the element that was clicked), return
// if(boardArray[clickedSquare] === true){
//   return
// } else if (boardArray[clickedSquare] !== null){
//   return 
// }

// find the index of the element that was clicked 

}





