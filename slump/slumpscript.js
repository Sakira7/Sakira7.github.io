
function random(){
    var button = document.getElementById("randomize");
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var min = Math.ceil(from);
    var max = Math.floor(to);
    var number = document.getElementById("number");
    var arr = [];
    var i;
    var x = "";
    
    for(i=0;i<30;i++){
        var rand = Math.floor((Math.random() * (max-min+1)+min));
        arr.push(rand);   
    }

    var j=0;
   var one = setInterval(function run(){
        if(j<=15){
            x=arr[j++];
        }
        number.innerHTML = x;

    },80);
    
     var two = setInterval(function run(){
        if(j>15 && j<=25){
            x=arr[j++];
        }
        number.innerHTML = x;  

    },140);
    
    var three = setInterval(function run(){
        if(j>25 && j<30){
            x=arr[j++];
        }
        number.innerHTML = x

    },200);
    
    
    setTimeout(function(){
        number.style.animation="fade 1s linear forwards";
        button.value="SLUMPA IGEN";
        button.style.width="7em"
        button.addEventListener("click", function (){
            location.reload();
        });
        initConfetti();
        render();
    },4000);
    setTimeout(function(){
        clearInterval(one);
        clearInterval(two);
        clearInterval(three);
    },4000);
    
}

let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});

installButton.addEventListener("click", async () => {
    if (!installPrompt) {
      return;
    }
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    disableInAppInstallPrompt();
});
  
window.addEventListener("appinstalled", () => {
disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
installPrompt = null;
installButton.setAttribute("hidden", "");
}

