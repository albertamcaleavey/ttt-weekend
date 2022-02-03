/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let squaresOnBoard = []
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
    const square = document.querySelectorAll('.square')
     // should I select them by class or element?
// console.log(square)
	// 2.2) Store the element that displays the game status on the page.
  const gameStatus = document.getElementById('message')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

// 3.2) That initialize function should initialize the state variables:
	  // 3.2.1) Initialize the board array to 9 nulls to represent empty squares. 
	    // The 9 elements will "map" to each square.
	    // Index 0 represents the top-left square.
	    // Index 1 represents the top-middle square.
			// So on, continuing through the entire board until...
	    // Index 8 maps to the bottom-right square.
	  // 3.2.2) Initialize whose turn it is to 1 (player 'X'). 
	    // Player 'O' will be represented by -1.
	  // 3.2.3) Initialize the winner variable to null.
	    // This represents that there is no winner or tie yet. 
	    // The winner variable will hold the player value (1 or -1) if there's a winner. 
	    // The winner will hold a 'T' if there's a tie.
	  // 3.2.4) Render those state variables to the page by calling a render function.
