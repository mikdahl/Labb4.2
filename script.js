var mobileNav = document.getElementById("mobileNav");
var result =""; //Variable for storing the result of the HTML & Array output

var linkArray = ["News", "About", "Press", "Careers", "Contact"];

for(var i = 0; i < linkArray.length; i ++ ){
    result += '<li><a href="#">' + linkArray[i] + '</a></li>';
    
    document.getElementById("mobileNav").innerHTML = result;
}




displayLinks();

function displayLinks(){
    if(mobileNav.style.display ==="none"){
    mobileNav.style.display ="block";
    } else{
        mobileNav.style.display="none";
    }
}