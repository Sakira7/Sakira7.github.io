let isOpen = false;
let show;
let i = 0;
let act = false;

function update(central){
    i = 0;
    central();
    let col = document.getElementsByTagName("input");
    let inputs = [];
    let info = document.querySelector("#info-input");
    let info_txt = document.querySelector("#info-select").value;
    if(info_txt === "blank" || info_txt === "default"){
        localStorage.setItem("info-txt", "");
    }else{
        localStorage.setItem("info-txt", info_txt);
    }
    localStorage.setItem("info", info.innerHTML);

    let chosen_widget = document.querySelector("#widgets").value;
    localStorage.setItem("widget", chosen_widget);

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
        
        if(days[day] != last_day && last_updt >= 2030){
            last_updt = 1030;
        }
        if(counter === 0 && time >= last_updt+100 && act === false || counter === 0 && days[day] != last_day && last_updt < 2030 && act === false|| counter >=6 && act === false){
            document.getElementById("pop-up").style.display = "block";
            document.getElementById("pop-up-text").innerHTML = "Dags att uppdatera dragen!";
            
            
            

            document.getElementById("ok").addEventListener("click", ()=>{
                document.getElementById("pop-up").style.display="none";
                if(counter === 0){
                    counter = 1;
                    let timer = setInterval(()=>{
                        counter++
                    },60000);
                }else{counter = 1;}

                document.querySelector("#show_btn").addEventListener("click", ()=>{clearInterval(timer); counter = 0})
            });

            document.addEventListener("keydown", (e)=>{
                if(e.key === "Enter"){
                    document.getElementById("pop-up").style.display="none";
                    counter = 1;
                    let timer = setInterval(()=>{
                        counter++
                    },60000);

                    document.querySelector("#show_btn").addEventListener("click", ()=>{clearInterval(timer); counter = 0})
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
    }else{
        e.preventDefault();
    }
});

let active = false;
let info = document.querySelector("#info-input");

info.addEventListener("focus", ()=>{active = true});

window.addEventListener("keydown", (e)=>{
    let inputs = document.querySelectorAll("input[type='text']");
    let date = document.querySelector("#date");
    let ar = [];

    for(var i = 0; i < inputs.length; i++){
        ar.push(inputs[i]);
    };

    if(e.key === "f" && active === false){
        ar.forEach((e, i) =>{
            e.value = e.placeholder;
            date.value = "2025-01-01";
            
        });

        let inputs2 = document.querySelectorAll("input");
        let ar2 = [];

        for(var i = 0; i < inputs2.length; i++){
            ar2.push(inputs2[i]);
        };

        ar2.forEach((e,i) =>{
            localStorage.setItem("value"+i, e.value);
        });

    }
});


window.addEventListener("keydown", (e)=>{
    if(e.key === "o" && active === false){
        let inputs = document.querySelectorAll("input[type='text']");
        let date = document.querySelector("#date");
        let ar = [];

        for(var i = 0; i < inputs.length; i++){
            ar.push(inputs[i]);
        }

        ar.forEach((e, i) =>{
            e.value="";
            date.value="";
            localStorage.removeItem("value"+i)
        })
        localStorage.removeItem("value12")
    }
});

let b_isActive = false;
let i_isActive = false;
let h_isActive = false;


let b_btn = document.querySelector("#b");
b_btn.addEventListener("mousedown", (e)=>{

    document.execCommand("bold");
    if(b_isActive === false){

        b_isActive = true;
        b_btn.style.color = "#ad3f8b";


    }else if(b_isActive === true){
        b_isActive = false;
        b_btn.style.color = "black";

    }
    e.preventDefault();
});
let i_btn = document.querySelector("#i");
i_btn.addEventListener("mousedown", (e)=>{

    document.execCommand("italic");

    if(i_isActive === false){

        i_isActive = true;
        i_btn.style.color = "#ad3f8b";


    }else if(i_isActive === true){
        i_isActive = false;
        i_btn.style.color = "black";

    }
    e.preventDefault();
});
let h_btn = document.querySelector("#h");
h_btn.addEventListener("mousedown", (e)=>{

    document.execCommand("bold");
    
    
    

    if(h_isActive === false){

        h_isActive = true;
        h_btn.style.color = "#ad3f8b";
        h_btn.style.webkitTextStrokeColor="#000";
        h_btn.style.webkitTextStrokeWidth="2px";




    }else if(h_isActive === true){
        h_isActive = false;
        h_btn.style.color = "#fff";
        h_btn.style.webkitTextStrokeColor="#000";
        h_btn.style.webkitTextStrokeWidth="1px";



    }

    e.preventDefault();
});



setInterval(()=>{

    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();

    hour = hour.toString();
    min = min.toString();

    if(min.length === 1){
    min = "0"+min;
    }
    document.querySelector("#time").innerHTML = hour+":"+min;
    localStorage.setItem("time", hour+"<span class='colon'>:</span>"+min);

},600);

document.querySelector("#widget-selector").addEventListener("click", ()=>{
    console.log("widgetssssss");
    document.querySelector("#widgets").addEventListener("click", ()=>{
        console.log(document.querySelector("#widgets").value);
        let clock = document.querySelector("#clock");
        let info = document.querySelector("#info-box");
        let widget = document.querySelector("#widgets").value;
        if(widget === "klocka"){
            clock.removeAttribute("hidden", "");
            clock.style.display="block";
            info.setAttribute("hidden", "");

        }else if(widget === "info-box"){
            clock.setAttribute("hidden", "");
            info.removeAttribute("hidden","");
            clock.style.display="none";
        }else if(widget === "default"){
            clock.setAttribute("hidden", "");
            info.setAttribute("hidden", "");
            clock.style.display = "none";
        }
    })
})






