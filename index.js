function converter(){
    var allbtns = document.getElementsByClassName("button");
        for(var i=0;i<allbtns.length;i++){
            allbtns[i].classList.remove("selected");
        }
    
     var button = document.getElementById("cButton");
     button.classList.add("selected");
}

