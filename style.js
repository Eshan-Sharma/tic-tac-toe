const Gameboard = (()=>{
    let gameboard = ["","","","","","","","",""];

    const render = ()=>{
        let boardHTML = "";
        gameboard.forEach((square,index)=>{
            boardHTML += `<div class="square" id=square-${index}>${square}</div>`
        })
        document.querySelector("#gameboard").innerHTML = boardHTML;
    }

    
    return {render}
})();

const createPlayer = (name, mark)=>{
    return {name, mark};
}

const Game = (()=>{
    let players = [];
    let currPlayerIndex = 0;
    let gameOver = false;

    const start = ()=>{
        players = [
            createPlayer(document.querySelector("#player1").value, 'X'),
            createPlayer(document.querySelector("#player2").value,'O')
    ]
    currPlayerIndex = 0;
    gameOver = false;
    }

    return {start}
})();


const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click",()=>{
    alert("Start");
    Game.start();
});


const resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click",()=>{
    alert("Reset");
});