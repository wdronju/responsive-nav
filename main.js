// select 
let menuIcon = document.getElementById("menuIcon");
let close = document.getElementById("close");
let flotingMenu = document.getElementById("flotingMenu");




menuIcon.addEventListener("click", function(){
menuIcon.style.display="none";
flotingMenu.style.display="block";

close.style.display="block";
})
close.addEventListener("click", function(){
    menuIcon.style.display="block";
    flotingMenu.style.display="none";
    
    close.style.display="none";
    })
