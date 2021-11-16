var mobileNav = document.getElementById("mobileNav");
var result =""; //Variable for storing the result of the HTML & Array output
var headerNav = document.getElementById("nav-item1");
//var closeIcon ="closeIcon.png";
//var navIcon;

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
        headerNav.style.boxShadow = "none";

    } else {
        mobileNav.style.display="none";
        headerNav.style.boxShadow = "0px 4px 4px rgb(0, 0, 0, 0.25)";
    }
}