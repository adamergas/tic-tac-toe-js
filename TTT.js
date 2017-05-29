var player = '';
var computer = '';
var boardArray = ["","","","","","","","",""];
const winConditions = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
var isPlayerTurn = true;
//adds onclick functions to all buttons after page is ready
$(document).ready(function(){
  $('.space').on("click", function(){ if(isPlayerTurn){ clickSquare(this) }});
  $('.symbol').on("click", function(){ chooseSymbol(this) });
});

function chooseSymbol(target){
  if(player == ''){ player = $(target).attr('id'); }
  computer = (player == 'X' ? 'O' : 'X');
}

function clickSquare(target){
  /*check to see if square is taken*///////////////////
  let i = $(target).attr('id');
  if(boardArray[i] == "" ){
    boardArray[i] = turn();
  }
  update();
  checkWin();
}

function turn(){
  if(player=='X'){ player = 'O'; }
  else {
    player = 'X';
  }
  return player;
}

function update(){
  $( ".space" ).each( function( index ) {
    $(this).text(boardArray[index]);
  });
}

//currently only checks to see if X wins
//could code to check X and O win separately, then formulate result based on player symbol
//or retool to check win based on whose turn it is, then formulate result based on turn
function checkWin(){
  for(let i = 0; i < 8; i++){
    win = winConditions[i].every( function(e){
      return boardArray[e] == 'X';
    });
    if(win){
      $(".result").text("You Win!");
      break;
    }
  }
}
