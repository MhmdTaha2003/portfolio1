
let link =
 document.querySelector(".header .links ");
let menue =
 document.querySelector(".header .links ul");

 link.onclick = function(){
   if(menue.style.display !== "block")
        menue.style.display = "block";
    else
        menue.style.display ="none"
 }