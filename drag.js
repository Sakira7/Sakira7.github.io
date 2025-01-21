let isOpen = false;
let show;
function change(){

    if(isOpen === false){
        show = window.open("show.html");
        isOpen = true;
    }
    if(show.closed === true){
        isOpen = false;
    }

    let col = document.getElementsByTagName("input");
    let val = col.length;


    for(var i = 0; i < val; i++){

        localStorage.setItem("value" + i, col[i].value);
    }
}
function show_dp(){
    document.getElementById("bd").style.visibility = "visible";
    document.getElementById("bd1").style.visibility = "visible";
}
