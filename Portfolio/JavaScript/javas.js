const prev=document.querySelector(".prev")
const next=document.querySelector(".next")
const slider=document.querySelector(".slider ul")
pos=0


next.addEventListener("click",function(){
    pos++;
    if(pos==slider.querySelectorAll("li").length){
        pos=0;
    }
    slider.style.left=-slider.clientWidth*pos+"px";
})

prev.addEventListener("click",function(){
    pos--;
    if(pos== -1){
        pos=slider.querySelectorAll("li").length-1
    
    }
    slider.style.left=-slider.clientWidth*pos+"px";
})