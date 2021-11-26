var mobileNav = document.getElementById("mobileNav"); //Creating and assigning a var for the mobilenav html element.
var nav_item1 = document.getElementsByClassName("nav-item1")[0]; //Creating and assigning a var for the "nav-item1" html element.

var result =""; //Variable for storing the result of the HTML & Array output

var closeIcon ="closeIcon.png"; //Creating and assigning a var for the "close" icon, for the menu in mobile
var hamburgerIcon ="nav.png"; // Creating and assigning a var for the hamburger menu.

var linkArray = ["News", "About", "Press", "Careers", "Contact"]; //Creating an array for the menu titles in order to use one of the criteria for VG ("Using an array")

for(var i = 0; i < linkArray.length; i ++ ){ // Looping through every var in the array
    result += '<li><a href="#">' + linkArray[i] + '</a></li>'; //Assigning each of the vars that gets looped through to the var "result"
    
    document.getElementById("mobileNav").innerHTML = result; // Use the result and send it to the html document when run.
}



displayLinks(); // Function that runs the displayLinks() function once. This is done to avoid need to click twice on the mobile menu in order to open it.


function displayLinks(){ //Function to display and use the mobile menu.
    if(mobileNav.style.display ==="none"){ //If the mobile menu is set to display none, then set it to display block for it to show.
    mobileNav.style.display ="block"; //^^
    mobileNav.style.boxShadow ="0px 2px 2px rgb(0, 0, 0, 0.10)"; //Adjust the boxshadow to be acording to the design once the mobile menu has epxanded
        var navIcon = document.getElementById("nav-icon").src = closeIcon; //CHange the icon from the hamburger menu to the "close" icon.
        
        //Adds the class that hides the box shadow
        nav_item1.classList.add("nav-item1-nonshadow");
        
    } else {
        mobileNav.style.display="none"; //If the mobile menu has display "block", then set it to display none in order to hide it. 
        navIcon = document.getElementById("nav-icon").src = hamburgerIcon; //Change the icon to the hamburger icon once we close the mobile menu
        
        //removes the class that hides the box shadow
        nav_item1.classList.remove("nav-item1-nonshadow");
    }
}



