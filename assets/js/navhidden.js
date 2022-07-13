let navhid =  document.querySelector("#navhidden");
window.onscroll = function (e) {  
    if(window.scrollY > 50){
        navhid.style.display = "none";
    }else{
        navhid.style.display = "block";
    }
} 