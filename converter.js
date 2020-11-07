function ftoc (){ 
    var allbtns = document.getElementsByClassName("button");
    for(var i=0;i<allbtns.length;i++){
        allbtns[i].classList.remove("selected");
    }
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var button = document.getElementById("btn1");
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    p1.innerHTML="fahrenheit:";
    p2.innerHTML="celsius:";
    input1.value = "";
    input2.value = "";
    button.classList.add("selected");
    input1.onkeyup = function(){
        
        var result = ((input1.value-32)*5)/9;

        input2.value = Math.round(result);
    };
    input2.onkeyup = function(){
        
        var result = ((input2.value/5)*9)+32;

        input1.value = Math.round(result);
    };
     
}

function ctod (){
    var allbtns = document.getElementsByClassName("button");
    for(var i=0;i<allbtns.length;i++){
        allbtns[i].classList.remove("selected");
    }
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var button = document.getElementById("btn2");
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    p1.innerHTML="cup:";
    p2.innerHTML="dl:";
    input1.value = "";
    input2.value = "";
    button.classList.add("selected");
    input1.onkeyup = function calc(){
        
        var result = input1.value * 2.365882;

        input2.value = Math.round(result*10)/10;
    };
        input2.onkeyup = function(){
        
        var result = input2.value/2.365882;

        input1.value = Math.round(result*10)/10;
    };
     
      
}
