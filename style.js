var orgBoard;
let player1Turn = true;
const player1 = 'O';
const player2 = 'X';
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [6,4,2],
    [0,4,8],
    [1,4,7],
    [2,5,8]
]
const cells = document.querySelectorAll(".cell");
startGame();

function startGame(){
    document.querySelector("#result-display").style.display = "none";
    orgBoard = Array.from(Array(9).keys());
    for(let i = 0; i < cells.length;i++){
        cells[i].innerHTML = "";
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener("click",turnClick, false);
    }
}

function turnClick(square){
    if(typeof orgBoard[square.target.id]=='number'){
        if(player1Turn){
            turn(square.target.id,player1);
        }else{
            if(!checkTie()){
                turn(square.target.id,player2);
            }
        }
        player1Turn = !player1Turn;
    }
}
    

function turn(sqaureId, player){
    orgBoard[sqaureId] = player;
    document.getElementById(sqaureId).innerText = player;
    let gameWon = checkWin(orgBoard, player);
    if(gameWon){
        gameOver(gameWon)
    }
}

function checkWin(board, player) {
	let plays = board.reduce((a, e, i) => 
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of winCombos.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
			break;
		}
	}
	return gameWon;
}


function gameOver(gameWon){
    for(let index of winCombos[gameWon.index]){
        document.getElementById(index).style.backgroundColor = gameWon.player == player1?'red':'green';
    }
    for(let i = 0; i < cells.length;i++){
        cells[i].removeEventListener('click',turnClick,false)
    }
    declareWinner(gameWon.player == player1 ? `Player 1 Wins!`:`Player 2 Wins!`)
}

function emptySquares(){
    return orgBoard.filter(s => typeof s == 'number');
}
function checkTie() {
	if (emptySquares().length == 0) {
		for (var i = 0; i < cells.length; i++) {
			cells[i].style.backgroundColor = "blue";
			cells[i].removeEventListener('click', turnClick, false);
		}
		declareWinner("Tie Game!")
		return true;
	}
	return false;
}

function declareWinner(who){
    document.querySelector("#result-display").style.display = "block";
    document.querySelector("#result-display #text").innerText = who;
}

const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click",()=>{
    alert("Game starts...");
    startGame();
});

const resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click",()=>{
    alert("Reset Done");
    startGame();
});