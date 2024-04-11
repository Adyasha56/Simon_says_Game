let gameSeq = [];
let userSeq = [];

let btns = ["pink","blue","chocolate","green"];
let started=false;
let level=0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false)
    {
      console.log("game is started");
      started = true; 
      
      levelUp();
    }
});

function gameFlash(btn){
     btn.classList.add("flash");
     setTimeout(function (){
        btn.classList.remove("flash");
     },1000);
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function (){
     btn.classList.remove("userflash");
  },250);
}

function levelUp(){
  userSeq =[];
   level++;
    h2.innerText =`Level ${level}`;
    
    let randomIdx = Math.floor(Math.random() * 3); 
    let randomClr = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomClr}`);
    
    
    // console.log(randomIdx);
    // console.log(randomClr);
    // console.log(randombtn);
    gameSeq.push(randomClr);
    console.log(gameSeq);
    gameFlash(randombtn);
}

function checkAns(index){
    //console.log("current level:  ",level);
   //let index = level - 1;
   if(userSeq[index] == gameSeq[index])
   {
      if(userSeq.length == gameSeq.length)
      {
        setTimeout(levelUp,1000);
      }
    console.log("same value");
   }else{
    h2.innerHTML =`Game Over!!! Your score is <b>${level}</b> <br>Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },250);
    reset(); 
  
  }
}

function btnPress (){
  //console.log(this);
  let btn = this;
   userFlash(btn);
  userClr =btn.getAttribute("id");
  //console.log(userClr);
  userSeq.push(userClr);
  
  checkAns(userSeq.length-1);
}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn)
{
  btn.addEventListener("click" , btnPress);
}

function reset(){
   started=false;
   gameSeq =[];
   userSeq =[];
   level =0;
}



