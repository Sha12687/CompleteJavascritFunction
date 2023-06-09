var scrolledHeight=document.getElementById("scrolled");
function getDocHeight(){
    var D=document;
    return(
        Math.max(D.body.clientHeight,D.body.scrollHeight,D.body.offsetHeight)
    );
}
var docHeight=getDocHeight();
var innerHeight=window.innerHeight;

function setScrolled(){
    var scrolled=Math.floor((window.scrollY/(docHeight-innerHeight))*100);
    scrolledHeight.innerText=scrolled;
    console.log(scrolled);
}
window.addEventListener("scroll",setScrolled);

var countInterval;
var number=0;
function startCounter(){
    number=parseInt(number=document.getElementById("input").value);
    var current=document.querySelector('.current');
    var next=document.querySelector('.next');
    var counter =0;
    resetNumbers(current, next);

    if (number < 1 || number > 9) {
      clearInterval(countInterval);
      return;
    }
  
    // Clears the previous interval that was running
    clearInterval(countInterval);
  
   // increaseCount(current,next);
     countInterval=setInterval(function(){
        if(counter===number){
            clearInterval(countInterval);
            return;
        }
        increaseCount(current,next);
        counter++;
     },2000);
    console.log(next);
}


// function animate(){
    //     next.innerHTML=counter;
    //     next.classList.add('animate');
    //     setTimeout(function(){
    //         next.classList.remove('animate');
    //     },500)
    // }
    
function resetNumbers(current, next, number) {
   num=document.getElementById('input');
    current.innerHTML = "0";
   num.value="0";
  }
function increaseCount(current,next){
    next.classList.add('animate');
    current.innerHTML=next.innerHTML;
  next.classList.remove('animate');
  next.innerHTML = parseInt(next.innerHTML) + 1;
}
window.addEventListener('DOMContentLoaded', resetNumbers);