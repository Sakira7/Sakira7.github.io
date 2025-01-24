let isOpen = false;
let show;

function update(){

    let col = document.getElementsByTagName("input");
    let val = col.length;
    isClicked = true;

    for(var i = 0; i < val; i++){

        localStorage.setItem("value" + i, col[i].value);
    }

    if(isOpen === false){
        show = window.open("show.html");
        isOpen = true;
    }
    if(show.closed === true){
        isOpen = false;
    }
    
}
window.addEventListener("beforeunload",()=>{
    show.close();
})


