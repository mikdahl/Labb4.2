var mobileNav = document.getElementById("mobileNav");
var nav_item1 = document.getElementsByClassName("nav-item1")[0];

var result =""; //Variable for storing the result of the HTML & Array output

var closeIcon ="closeIcon.png";
var hamburgerIcon ="nav.png";

var linkArray = ["News", "About", "Press", "Careers", "Contact"];

for(var i = 0; i < linkArray.length; i ++ ){
    result += '<li><a href="#">' + linkArray[i] + '</a></li>';
    
    document.getElementById("mobileNav").innerHTML = result;
}



displayLinks();


function displayLinks(){
    if(mobileNav.style.display ==="none"){
    mobileNav.style.display ="block";
    mobileNav.style.boxShadow ="0px 2px 2px rgb(0, 0, 0, 0.10)";
        var navIcon = document.getElementById("nav-icon").src = closeIcon;
        
        //Adds the class that hides the box shadow
        nav_item1.classList.add("nav-item1-nonshadow");
        
    } else {
        mobileNav.style.display="none";
        navIcon = document.getElementById("nav-icon").src = hamburgerIcon;
        
        //removes the class that hides the box shadow
        nav_item1.classList.remove("nav-item1-nonshadow");
    }
}



