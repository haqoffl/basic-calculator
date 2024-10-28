// start
let screen = document.getElementById('screen');
function calculator(num){
  
screen.value += num;

}
function reset(){
document.getElementById('screen').value = "";
}

function evaluator(){
  if(screen.value === ""){
    alert('please fill something')
  }
  else{
    let evaluates = eval(screen.value)
 screen.value = evaluates;
  }
  
}
// end
