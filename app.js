let h2 = document.querySelector("h2");
let body= document.querySelector("body");

let usrSeq = [];
let gameSeq = [];

let buttons = ["red", "green", "yellow", "purple"];

let level = 0;
let started = false;

document.addEventListener("keypress", ()=>{
  if(started == false){
    console.log("game started");
    started = true;

    levelUp();
  }
});
function levelUp(){
  usrSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

 let rndIdx = Math.floor(Math.random()*3);
 let rndColor = buttons[rndIdx];
 let rndBtn = document.querySelector(`.${rndColor}`);
//  console.log(rndBtn);
//  console.log(rndColor);
//  console.log(rndIdx);
  gameSeq.push(rndColor);
  console.log(gameSeq);

  gameFlash(rndBtn);


}
function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(()=> {
    btn.classList.remove("flash");
  },215);
}
function usrFlash(btn){
  btn.classList.add("usrFlash");
  setTimeout(()=> {
    btn.classList.remove("usrFlash");
  },215);
}

function btnPress(){
  let btn = this;
  usrFlash(btn);
  usrColor = btn.getAttribute("id");
  // console.log(usrColor);
  usrSeq.push(usrColor);
  // console.log(usrSeq);
  check(usrSeq.length - 1);

}
function check(index){
// let index = level - 1;
if(usrSeq[index] === gameSeq[index]){
  if(usrSeq.length === gameSeq.length){
    setTimeout(levelUp, 1000);
  }
}else{
  h2.innerHTML = `Game Over!! Your score was <b>${level}</b><br>Press any key to start`;
  body.style.backgroundColor = "red";
  setTimeout(()=>{
    body.style.backgroundColor = "white";
  },150);
  reset();
}
}
let allBtns = document.querySelectorAll(".btn");
for (button of allBtns){
  button.addEventListener("click", btnPress);
}
function reset(){
  started = "false";
  gameSeq  = [];
  usrSeq =[];
  level = 0;}


















































































