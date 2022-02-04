/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let boardArray = []
// 1.1) Use an array to represent the squares on the board.
let turn
// 1.2) Use a turn variable to track whose turn it is.
let winner 
// 1.3) Use a winner variable to represent three different game states:
	  // a player that won
	  // a tie has occured
	  // or a game that is still in play.
/*------------------------ Cached Element References ------------------------*/
	// 2.1) Store the 9 elements that represent the squares on the page.
	  // You may want to give each square a class name in your HTML to make this easier!
    const squares = document.querySelectorAll('.square')
     // should I select them by class or element?
    console.log(squares)
	// 2.2) Store the element that displays the game status on the page.
  const gameStatus = document.getElementById('message')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
  // INITIALIZE FUNCTION

    init()

    function init(){
      boardArray = [null, null, null, null, null, null, null, null, null]

      console.log(boardArray)
      turn = 1
      winner = null
      render()
    }

   