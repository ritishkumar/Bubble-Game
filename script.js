var timer  = 60;
var score = 0
var hitrn = 0

function increaseScore(){
  score += 10
  document.querySelector("#scoreval").textContent = score
}

function getnewHit(){
   hitrn = Math.floor(Math.random()*10)
  document.querySelector("#hitval").textContent = hitrn
}

function makeBubble(){
  var clutter="";

for(var i=1 ;i<=85;i++){
  var rn =   Math.floor(Math.random()*10)
 clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter
}
function runTimer(){
 var timer1 = setInterval(function(){
    if(timer>0){
    timer--;
    document.querySelector("#timervalue").textContent = timer
    }
    else{
      clearInterval(timer1)
      hitrn = 0
      document.querySelector("#hitval").textContent = hitrn
      document.querySelector("#pbtm").innerHTML=`<h1 id=""> Game Over!</h1>`
    }
  },1000)
}
document.querySelector("#pbtm").addEventListener("click",function(detail){
  // alert("welldone")
  var clickednum = Number(detail.target.textContent)
  if(clickednum === hitrn){
    increaseScore()
    makeBubble()
    getnewHit()
  }
})
runTimer();
makeBubble()
getnewHit()