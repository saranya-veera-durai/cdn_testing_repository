// ------------------------------------ addEventListener,removeEventListener---------------------


var division1=document.getElementById("main1");
var division2=document.getElementById("main2");
var para1=document.getElementById("sub1");
var para2=document.getElementById("sub2");


// syntax:element.addEventListener=(event,function)
// division1.addEventListener("click", a);
division1.addEventListener("mouseover", a);
division1.addEventListener("mouseleave", b);
function a(){
  division2.style.backgroundColor="blue";
}
function b(){
  division2.style.backgroundColor="green";
  para2.textContent="JAVASCRIPT"
}
// division1.removeEventListener("mouseover", a);