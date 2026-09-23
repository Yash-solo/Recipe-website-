const menubar = document.querySelector(".menubar");
let isOpen = false;
const upperLine = document.querySelector(".upperline");
const midLine   = document.querySelector('.Midline');
const lowerLine = document.querySelector('.Lowerline');
const sidebar = document.querySelector('.sidebar')


menubar.addEventListener('click',(e)=>{
    if(isOpen === false){
        midLine.style.display = "none";
        upperLine.classList.add("rotate-[405deg]","translate-y-2")
        lowerLine.classList.add("-rotate-[405deg]","-translate-y-0.5")
        isOpen=true;
    }else{
        midLine.style.display = "flex";
        upperLine.classList.remove("rotate-[405deg]","translate-y-2")
        lowerLine.classList.remove("-rotate-[405deg]","-translate-y-0.5")
        isOpen = false;
    }
    if(isOpen===false){
        sidebar.style.display = "none";
       
    }else{
        sidebar.style.display = "flex";
    }

})
