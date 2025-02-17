var names = ["Sara", "Adam", "Helene", "Anki", "Pernilla", "Thomas", "Majvor"];
var num = 0;
var rand = 0;
var output = document.getElementById("name");
var form = document.getElementById("form");
var button = document.createElement("input");

function generator(){
    num = names.length -1;
    rand = Math.round(Math.random()*num);
    output.innerHTML = names[rand];
    button.setAttribute("type", "button");
    button.setAttribute("value", "Jag vill vara 'Secret Santa' till " + names[rand] + "!");
    button.setAttribute("onclick", "choose()");
    button.setAttribute("class", "btn");
    button.setAttribute("id", "chooseBtn");
    
    form.appendChild(button);
    
    if(names.length === 0){
        output.innerHTML="Inga fler att välja";
        form.removeChild(button);
    }
}
function choose(){
    output.innerHTML=" ";
    form.removeChild(button); 
    output.innerHTML="<p>Du valde: </p>" + names[rand] + "<br>";
    var output2 = document.createElement("div");
    output2.setAttribute("id", "parant");
    form.appendChild(output2);
    output2.innerHTML= "(ta skärmdump)";
    names = names.slice(0, rand).concat(names.slice(rand + 1, names.length)); 
    var ogBtn = document.getElementById("ogBtn");
    form.removeChild(ogBtn);
}