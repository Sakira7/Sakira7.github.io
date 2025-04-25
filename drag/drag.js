let isOpen = false;
let show;
let i = 0;
let act = false;

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


            show = window.open("show.html", "_blank", "popup");
            
            if(window.screen.isExtended == true){
                
                console.log("Two monitors detected");
                console.log(show.document.fullscreenElement);
                let fs = new KeyboardEvent("keypress", {key:"F11"});
                show.addEventListener("keypress", ()=>{
                    console.log("fullscren?");
                    console.log(show);
                })
                show.dispatchEvent(fs);
                

                let event = new KeyboardEvent("keydown",{
                    metaKey : true,
                    shiftKey : true,
                    key : "ArrowRight"
                });

                show.addEventListener("keydown", (e)=>{
                    console.log("event dispatched: "+ e.key + e.metaKey + e.shiftKey);

                });

                show.dispatchEvent(event);
        


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
        localStorage.setItem("last_updt", show_date.innerHTML);
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


let counter = 0;


setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if(minutes < 2){
        minutes = "0"+minutes;
    }
    let time = hours + "" + minutes;

    let day = date.getDay();
    let days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    
    
    let last_updt = document.querySelector(".bold");
    last_updt = last_updt.innerHTML;
    last_updt = last_updt.split(" ");
    let last_day = last_updt[0];
    last_updt = last_updt[1];
    
    last_updt = last_updt.split(":");
    last_updt = last_updt.join("");
    last_updt = parseInt(last_updt);


    if(time > 945 && time < 2200){
        last_updt = 1400;
        
        if(days[day] != last_day && last_updt >= 2030){
            last_updt = 1030;
        }
        if(counter === 0 && time >= last_updt+100 && act === false || counter === 0 && days[day] != last_day && last_updt < 2030 || counter >=6){
            document.getElementById("pop-up").style.display = "block";
            document.getElementById("pop-up-text").innerHTML = "Dags att uppdatera dragen!";
            
            
            

            document.getElementById("ok").addEventListener("click", ()=>{
                document.getElementById("pop-up").style.display="none";
                if(counter === 0){
                    counter = 1;
                    let timer = setInterval(()=>{
                        counter++
                        console.log(counter);
                    },60000);
                }else{counter = 1;}

                document.querySelector("#show_btn").addEventListener("click", ()=>{clearInterval(timer); counter = 0; console.log("reset")})
            });

            document.addEventListener("keydown", (e)=>{
                if(e.key === "Enter"){
                    document.getElementById("pop-up").style.display="none";
                    counter = 1;
                    let timer = setInterval(()=>{
                        counter++
                        console.log(counter);
                    },60000);

                    document.querySelector("#show_btn").addEventListener("click", ()=>{clearInterval(timer); console.log("reset")})
                }
            });

            document.querySelectorAll("input").forEach(box =>{
                box.addEventListener("focus", ()=>{
                    act = true;
                })
            })
        }
        
    }

}, 60000);

document.addEventListener("click", (e)=>{
    if(e.target.nodeName === "INPUT"){
        e.target.select()
    }
});





