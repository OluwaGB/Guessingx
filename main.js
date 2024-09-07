console.log('Hello World!');
guess= document.getElementById('userGuess');
computer=document.getElementById('computerGuess');
checkBtn = document.getElementById("check");
playBtn = document.getElementById('play');
wrap = document.getElementById("wrap")
guess.value = guess.onInput;
myGuess = guess.value;
function number(){
   values = Math.floor(Math.random()*10);
   computer.value=values;
  }
/*function show(){
computer.value=number;
}*/
playBtn.onclick= number;
function info(){/*if(myGuess===values){
  wrap.innerHtml="correct"}
  else{wrap.innerHtml='wrong';
}*/
if(myGuess===values){
  console.log("correct");
  else
  {console.log("wrong");
}
  
}
checkBtn.onclick = info;
/*times =checkBtn.onclick.length;
times===3?console.log("Gameover"):console.log("keep Guessing")*/