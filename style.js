var orgBoard;
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
    console.log(square.target.id)
}
// const Gameboard = (()=>{
//     let gameboard = ["","","","","","","","",""];

//     const render = ()=>{
//         let boardHTML = "";
//         gameboard.forEach((square,index)=>{
//             boardHTML += `<div class="square" id=square-${index}">${square}</div>`
//         })
//         document.querySelector("#gameboard").innerHTML = boardHTML;
//         const squares = document.querySelectorAll(".square");
//         // squares.forEach(square=>{
//         //     square.addEventListener("click",Game.handleClick());
//         // })
//     }

    
//     return {render}
// })();

// const createPlayer = (name, mark)=>{
//     return {name, mark};
// }

// const Game = (()=>{
//     let players = [];
//     let currPlayerIndex = 0;
//     let gameOver = false;

//     const start = ()=>{
//         players = [
//             createPlayer(document.querySelector("#player1").value, 'X'),
//             createPlayer(document.querySelector("#player2").value,'O')
//     ]
//     currPlayerIndex = 0;
//     gameOver = false;
//     Gameboard.render();
//     }

//     const handleClick = (event)=>{
//         // alert("hello")
//     }

//     return {start,handleClick}
// })();


const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click",()=>{
    alert("Start");
    // Game.start();
    startGame();
});


const resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click",()=>{
    alert("Reset");
});