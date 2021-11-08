var readmoreArrow = document.getElementById("readmore-arrow");
readmoreArrow.onmouseenter = function(){
    this.classList.add("hovered");
}

readmoreArrow.onmouseleave = function(){
    this.classList.remove("hovered");
}