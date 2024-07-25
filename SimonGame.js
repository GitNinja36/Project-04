let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game started");
        started = true;
        levelUP();
    } 
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 1000);
}
function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function(){
        btn.classList.remove("user-flash");
    }, 500);
}

function levelUP(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randInx = Math.floor(Math.random()*3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randInx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(indx){
    // console.log(`current level : ${level}`);
    if(userSeq[indx] === gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUP,1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score was : <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor ="red";
        setInterval(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPressed(){
    let btn = this;
    userFlash(btn);
    useColor = btn.getAttribute("id");

    userSeq.push(useColor);
    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPressed);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}