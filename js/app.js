/*-------------------------------- Constants --------------------------------*/



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
      boardArray = [1, 1, -1, null, null, -1, null, null, null]

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
    if(winner !== null){
      gameStatus.textContent = `It's player ${turn}'s turn!` 
    } else if(winner === "T") {
      gameStatus.textContent = "It's a tie!"
    } else{
      gameStatus.textContent = `Congratulations! Player ${turn} won!`
    }
  } 
  
  
  // 3.3.2) Render a message reflecting the currrent game state:
    // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
      // Hint: Maybe use a ternary inside of a template literal here?
    // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
    // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
      // Hint (again): Maybe use a ternary inside a template literal here