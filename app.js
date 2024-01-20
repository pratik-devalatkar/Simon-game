let gameseq=[];
let userseq=[];

let btns=["red","green","blue","orange"];

let started=false;
let level=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(started==false){
        started=true;
    }
    levelup();
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;

    let rannum= Math.floor(Math.random()*4);
    let rancolor= btns[rannum];
    let ranbtn=document.querySelector(`.${rancolor}`);
    gameseq.push(rancolor);
    console.log(gameseq);
    btnflash(ranbtn);
}
function ans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup, 1000);
        }
    }else{
        h3.innerHTML=`Game over! Your score was ${level} <br> Press any key to start.`;
        document.querySelector("body").style.background="red";
        setTimeout(function(){
            document.querySelector("body").style.background="white";
        }, 150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    btnflash(btn);

    let userColor=btn.getAttribute("id");
    userseq.push(userColor);

    ans(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}