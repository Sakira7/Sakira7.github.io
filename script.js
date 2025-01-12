function change(){

    let col = document.getElementsByTagName("input");
    let val = col.length -1;


    for(var i = 0; i < val; i++){

        localStorage.setItem("value" + i, col[i].value);
    }
}