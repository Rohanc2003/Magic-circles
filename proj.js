var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
one.addEventListener("mouseenter",function(){
    one.innerHTML=(Math.floor(Math.random()*100));
});
one.addEventListener("mouseleave",function(){
    one.innerHTML="1";
});
let clr="red";
two.addEventListener("mouseenter",function(){
   if (clr=="red") {
    two.style.backgroundColor="red";
    clr="green";
   }
   else if (clr=="green")
    {
    two.style.backgroundColor="green";
    clr="blue";
   }
   else{
    two.style.backgroundColor="blue";
    clr="red";
   }
});
two.addEventListener("mouseleave",function(){
    two.style.backgroundColor="white";
});

three.addEventListener("mouseenter",function(){
let a=Math.floor(Math.random()*255);
let b=Math.floor(Math.random()*255);
let c=Math.floor(Math.random()*255);
    three.style.backgroundColor=`rgb(${a}, ${b}, ${c})`;
});
three.addEventListener("mouseleave",function(){
    three.style.backgroundColor="white";
});
four.addEventListener("mouseleave",function(){
    one.style.backgroundColor="white";
    two.style.backgroundColor="white";
    three.style.backgroundColor="white";

});
four.addEventListener("mouseenter",function(){
let r=Math.floor(Math.random()*256);
let g=Math.floor(Math.random()*256);
let bl=Math.floor(Math.random()*256);
    one.style.backgroundColor=`rgb(${r}, 255, 255)`;
    two.style.backgroundColor=`rgb(255, ${g}, 255)`;
    three.style.backgroundColor=`rgb(255, 255, ${bl})`;

});
four.addEventListener("mouseleave",function(){
    four.style.backgroundColor="white";});
