let isOpen = false;
let show;

function update(){

    let col = document.getElementsByTagName("input");
    let inputs = [];

    for(var i = 0; i < col.length; i++){
        if(col[i].value != ""){
            inputs.push(col[i].value)
        }
    }

    let val = inputs.length;
    isClicked = true;

    
    if(inputs.length > 0){

    for(var i = 0; i < val; i++){

        localStorage.setItem("value" + i, inputs[i]);
    }

    if(isOpen === false){
        show = window.open("show.html");
        isOpen = true;
    }
    if(show.closed === true){
        isOpen = false;
    }


    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    


    if(minutes.toString().length === 1){
        minutes = "0" + minutes;
    }

    let days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

    let show_date = document.getElementById("last_updt");
    show_date.innerHTML = "Senast uppdaterad: " + "<span class='bold'>"+days[day] + " " + hours + ":" + minutes+"</span>";
}else{
    alert("Fyll i alla fält!");
}
    
}
window.addEventListener("beforeunload",()=>{
    show.close();
})


