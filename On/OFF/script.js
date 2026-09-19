let bulb=document.querySelector(".bulb");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    if(bulb.classList.toggle("lightup")){
        btn.textContent="Off";
    }
    else{btn.textContent="On";
    }
});