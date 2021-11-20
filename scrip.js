// play=document.getElementById("play");
// pause=document.getElementById("pause");
// pause.addEventListener('click',function(){
//     obstacle=document.querySelector(".obstacle");
//     obstacle.classList.remove("anime");  
// });
score=0;
var cross=true;
audio=new Audio('./images/music.mp3');
audiogo=new Audio('./images/gameover.mp3');
setTimeout(() => {
    audio.play();
},1000);
document.addEventListener('keyup',function(e){
    console.log("keycode is",e.keyCode);
    if(e.keyCode==38){
        dino=document.querySelector(".diano");
        dino.classList.add("up");
        setTimeout(() => {
            dino.classList.remove("up");
        }, 700);
    }
    if(e.keyCode==39){
        dino=document.querySelector(".diano");
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=dinoX+112+"px";
    }
    if(e.keyCode==37){
        dino=document.querySelector(".diano");
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left=(dinoX-112)+"px";
    }
});

setInterval(() => {
    dino=document.querySelector(".diano");
    gameOver=document.querySelector(".gameOver");
    obstacle=document.querySelector(".obstacle");
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    if(offsetX < 113 && offsetY <52){
        gameOver.innerHTML="Game Over";
        obstacle.classList.remove("anime");
        dino.style.display="none";
        audiogo.play();
        setTimeout(() => {
                audiogo.pause();
                audio.pause();
            }, 1000);
        // design bcd to access code converter
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            anidi=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newdur=anidi - 0.01;
            obstacle.style.animationDuration=newdur+"s";
        }, 500);
       
    }
}, 10);
function updateScore(score){
    const scoreC=document.getElementById("scoreCont");
    scoreC.innerHTML="View Score: "+score;
}