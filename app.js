let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let winner = document.querySelector('#msg');
let msg_container = document.querySelector('.msg-container');
let newGame = document.querySelector("#new-btn");
let body = document.body;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let turnO = true; // true for O and false for X


boxes.forEach((box) => {
    box.addEventListener('click',() =>{
        if(turnO) {
            box.innerText = 'O';
            turnO = false;
        }else{
            box.innerText ='X';
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


let checkWinner = () =>{

    let winnerFound = false;

    for(pattern of winningCombinations){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;
        

        if(pos1Val != "" && pos3Val != "" && pos2Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                winnerFound = true;
                showWinner(pos1Val);
                break;
            }
        }
    }
    if(!winnerFound){
        let filledBoxes = [...boxes].every(box => box.innerText !== "");
        if(filledBoxes){
            winner.innerText = "It's a draw";
            msg_container.classList.remove("hide");
        }
    }
};

let showWinner =  (win) => {
    winner.innerText=`Winner is ${win}`;
    msg_container.classList.remove('hide');
    for(let box of boxes){
        box.disabled = true;
    }
};

let newPlay = () =>{
    turnO = true;

    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    msg_container.classList.add("hide");
};

resetBtn.addEventListener('click',newPlay);


newGame.addEventListener('click',newPlay);

let modeBtn = document.querySelector("#mode");
let darkMode = true;
modeBtn.addEventListener('click',() =>{
    if(darkMode){
        body.classList.add("lightMode");
        modeBtn.innerText = "Dark Mode";
        darkMode = false;
    }
    else{
        body.classList.remove("lightMode");
        modeBtn.innerText = "Light Mode";
        darkMode = true;
    }
});
