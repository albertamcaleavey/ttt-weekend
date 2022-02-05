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

/*------------------------ Cached Element References ------------------------*/
  let squares = document.querySelectorAll('.square')

  let gameStatus = document.getElementById('message')

  let replayButton = document.getElementById('replay')


/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('.board').addEventListener('click', handleClick)

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
      // the squares will change depending on their value (depending on if they're occupied by player 1, 2 or not occupied)
      if(boardArray[i] === -1){
        squares[i].textContent = 'O'
      } else if(boardArray[i] === 1) {
        squares[i].textContent = 'X'
      } else{
        squares[i].textContent = ''
      }
    }

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
 
  

// HANDLE CLICK FUNCTION - when a square is clicked

function handleClick(evt){
  // find the id of the element that was clicked 
  let clickedSquare = evt.target.id
  // turn its id into a number
  // this number corresponds to an index which = a spot on the board in the board Array
  let sqIdx = parseInt(clickedSquare.split('').splice(2, 2).join(''))
  // if the board has a value at that index (index of the element that was clicked), return
  // if there is a winner, return
  
if(boardArray[sqIdx] !== null){
  return
}  else if (winner !== null){
  return 
} else {
  boardArray[sqIdx] = turn
}
// update board array at the index, with the value of turn
  
// change turn 
turn = turn * -1
// console.log(boardArray)
render()
getWinner()

}

function getWinner(){
  // loop through each of the winning combos- each array in the winCombos array
 winCombos.forEach(function(combo){
   console.log(combo)
   const a = combo[0]
   const b = combo[1]
   const c = combo[2]
   if(Math.abs(boardArray[a] + boardArray[b] + boardArray[c]) === 3){
     winner = boardArray[a]
     console.log(winner)
   }
   
  // total up the three board positions using the three indexes in the current combo
// let total = combo[0] + combo[1] + combo[2]
// // convert the total to an absolute value (convert any negative total to positive)
// console.log(total)
// if(total < 0) {
//  total = total * -1
// }
// if(total === 3){

// }
// render()
// })

})

// console.log(winCombos)




// if(Math.abs(boardArray[0] + boardArray[1] + boardArray[2]) === 3){
//   return boardArray[0]
// } 
// if(Math.abs(boardArray[3] + boardArray[4] + boardArray[5]) === 3){
//   return boardArray[3]
// } 
// if(Math.abs(boardArray[6] + boardArray[7] + boardArray[8]) === 3){
//   return boardArray[6]
// } 
// if(Math.abs(boardArray[0] + boardArray[3] + boardArray[6]) === 3){
//   return boardArray[0]
// } 
// if(Math.abs(boardArray[1] + boardArray[4] + boardArray[7]) === 3){
//   return boardArray[1]
// } 
// if(Math.abs(boardArray[2] + boardArray[5] + boardArray[8]) === 3){
//   return boardArray[2]
// } 
// if(Math.abs(boardArray[0] + boardArray[4] + boardArray[8]) === 3){
//   return boardArray[0]
// } 
// if(Math.abs(boardArray[2] + boardArray[4] + boardArray[6]) === 3){
//   return boardArray[2]
// } 









}