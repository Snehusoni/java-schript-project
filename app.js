let gameSeq = [];
let userSeq = [];

let btn = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        lavelup();
    }
});

function gameFlash(btn) {
    btn.classlist.add("flash");
    setTimeout(function() {
        btn.classlist.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
     btn.classList.remove("userflash");
    }, 250);
}
function lavelup() {
    level++;
    h2.innarText =`Level ${level}`;
    
    let randIdx = math.floor(math.random() * 3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector(`.${randcolor}`);
    console.push(rendcolor);
    console.log(gameSeq);
    gameFlash(rendBtn);

}
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq. length){
            setTimeout(lavelup,1000);
        }

    } else {
        h2.innerHTML = `Game Over! your scror was <b>${level}</b>press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();

    }
}

function btnpress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameSeq = [];
    gameSeq = [];
    level = 0;
}
