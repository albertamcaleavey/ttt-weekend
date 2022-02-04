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
      boardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

      console.log(boardArray)
      turn = 1
      winner = null
      render()
    }

   // RENDER FUNCTION

   function render() {
    for(let i = 0; i < boardArray.length; i++){
      let currentSquare = boardArray[i]
      console.log(currentSquare)
      if(currentSquare === -1){
        currentSquare.style.backgroundColor = 'green'
        // if player 1 occupies the current square being iterated over, change its color to green
      } else if(currentSquare === 1) {
        currentSquare.style.backgroundColor = 'blue'
        // if player 2 occupies the current square being iterated over, change its color to blue
      } else {
        currentSquare.style.backgroundColor= 'red'
        // if current square being iterated over is empty, change its color to red
      }
      
    }
  
  } 
  
  // 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration:
    // 3.3.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array

    // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
  // 3.3.2) Render a message reflecting the currrent game state:
    // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
      // Hint: Maybe use a ternary inside of a template literal here?
    // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
    // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
      // Hint (again): Maybe use a ternary inside a template literal here