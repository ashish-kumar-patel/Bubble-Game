let value=60;
let score=0;
let num ;

document.querySelector("#bottom")
.addEventListener("click",function(value){
  let data=Number(value.target.textContent);
   if(data==num){
    incresescore();
    randomvalue();
    bubblemaker();

   }
})
 function incresescore(){
    score+=10;
            document.querySelector("#scoreval").textContent=score;
 }


function randomvalue(){
 num= Math.floor(Math.random()*10);
 document.querySelector("#hitvalue").textContent=num;
};

function bubblemaker(){
    let clutter="";
for(i=1;i<=144;i++){
  let  num=Math.floor(Math.random()*10);
   clutter +=`<div class="bubble">${num}</div>`
};
document.querySelector(".panelbottom").innerHTML=clutter;
}

function timerrunner(){
   const interclear= setInterval(()=>{
        if(value>0){
            value--;
           document.querySelector('#timm').textContent=value;
        }
        else{
            clearInterval(interclear);
            document.querySelector(".panelbottom").innerHTML=`<h1>Game Over <br> Your Score is ${score} </h1>`
        }
    },1000)
}
bubblemaker();
timerrunner();
randomvalue();
