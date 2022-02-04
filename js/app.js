/*-------------------------------- Constants --------------------------------*/
const winCombos = [
  []
]


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
  // refers to each element with a class of square= all of the (divs) squares

	// 2.2) Store the element that displays the game status on the page.
  let gameStatus = document.getElementById('message')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
  // INITIALIZE FUNCTION

    init()

    function init(){
      boardArray = [1, 1, 1, null, null, -1, null, null, null]

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
        squares[i].style.backgroundColor = 'green'
      } else if(currentSquare === 1) {
        squares[i].style.backgroundColor = 'blue'
      } else{
        squares[i].style.backgroundColor= 'red'
      }
    }
    // MIGHT NEED TO COME BACK TO THIS !!!!!
    if(winner === null){
      gameStatus.textContent = `It's ${playerName()}'s turn!` 
    } else {
      winner === "T" ? gameStatus.textContent = "It's a tie!" : gameStatus.textContent = `Congratulations! ${playerName()} won!`
    }
    
    function playerName(){
      if(turn === -1) {
        return "Player 1"
      } else if(turn === 1){
        return "Player 2"
      }
    }
  } 
  



  // when winner = null, the game is in progess
    // message = whose turn it is
  // when winner = T, its a tie
    // message = its a tie
  // otherwise (if winner)

  // if winner = null, the game is in progess- wouldn't you want a message to say whose turn it is while the game is in progress?
  // when the winner is not null, that means there is a tie or a winner?