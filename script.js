var mainbox=document.querySelector(".main-box")
var thankyou=document.querySelector(".thank-you")
var submit=document.getElementById("submit")
var shine=document.getElementById("shine")

var rating=document.querySelectorAll(".btn")
var rates=document.getElementById("star")

submit.addEventListener("click",function(){
    thankyou.classList.remove("hidden");
    mainbox.style.display="none";
})

shine.addEventListener("click",function(){
    thankyou.classList.add("hidden");
    mainbox.style.display="block";
})

rating.forEach((rate)=>{
    rate.addEventListener("click",function(){
        rates.innerHTML=rate.innerHTML
    })
})
