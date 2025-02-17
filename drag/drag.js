let isOpen = false;
let show;
let i = 0;

function update(){
    i = 0;

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

            if(window.screen.isExtended == true){
                show = window.open("show.html", "popup", `left="100vw",top="0",width="100vw",height="100vh"` )
            }
            else{
                show = window.open("show.html", "popup");
            }
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
        if(hours.toString().length === 1){
            hours = "0" + hours;
        }

        let days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

        let show_date = document.getElementById("last_updt");
        show_date.innerHTML = "Senast uppdaterad: " + "<span class='bold'>"+days[day] + " " + hours + ":" + minutes+"</span>";
    }else{
        document.getElementById("pop-up").style.display="block";
        document.getElementById("ok").addEventListener("click", ()=>{
            document.getElementById("pop-up").style.display="none";
        });

        document.addEventListener("keydown", (e)=>{
            if(e.key === "Enter"){
                document.getElementById("pop-up").style.display="none";
            }
        });
    }
}
window.addEventListener("beforeunload",()=>{
    show.close();
});



    setInterval(() => {
    
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if(minutes < 2){
        minutes = "0"+minutes;
    }
    let time = hours + "" + minutes;
    
    let last_updt = document.querySelector(".bold").innerHTML;
    last_updt = last_updt.split(" ");
    last_updt = last_updt[1];
    last_updt = last_updt.split(":");
    last_updt = last_updt.join("");
    last_updt = parseInt(last_updt)
    if(time > 945 && time < 2200){

        if(time == last_updt+100 || i >= 2){
            document.getElementById("pop-up").style.display = "block";
            document.getElementById("pop-up-text").innerHTML = "Dags att uppdatera dragen!";
            i++

            document.getElementById("ok").addEventListener("click", ()=>{
                document.getElementById("pop-up").style.display="none";
            });

            document.addEventListener("keydown", (e)=>{
                if(e.key === "Enter"){
                    document.getElementById("pop-up").style.display="none";
                }
            });
        }
        
    }

}, 30000);







