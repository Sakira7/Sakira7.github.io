
let i = 0;
let toggle = 0;
function logFile (event) {
  let img_viewer = document.querySelector("#pics");
  let str = event.target.result;
  let img = document.createElement('img');
  img.setAttribute("class", "pic");
  img.setAttribute("id", "img"+i);
  localStorage.setItem("img"+i, str);
  img.src = localStorage.getItem("img"+i);
  img_viewer.append(img);


  img.addEventListener("click", ()=>{
    let images = [];
    images = document.getElementById("pics").childNodes;
    if(images[0].getAttribute("class") === "pic"){
      img.remove();
      localStorage.removeItem(img.id);
    }
  
  });
  
}

window.addEventListener("keypress", (e)=>{
  if(e.key == "o"){
    localStorage.clear();
    let pics = document.querySelector("#pics");
    pics.innerHTML="";
  }
})

window.addEventListener("load", function load(){
  let img_viewer = document.querySelector("#pics");
  toggle = 1;

  console.log(localStorage);

  for(var i = 0; i < localStorage.length; i++){
    let img = document.createElement("img");
    img.src = localStorage.getItem("img"+(i+1));
    img.setAttribute("class", "pic");
    img.setAttribute("id", "img"+(i+1));
  
    img_viewer.append(img);

    img.addEventListener("click", ()=>{
      img.remove();
      localStorage.removeItem(img.id);

    
    });
  }
});

window.addEventListener("keypress", (e)=>{
  if(e.key == " "){
    e.preventDefault();
    handleSubmit();
  }
});
function handleSubmit () {

  //localStorage.clear();
  let file_picker = document.createElement("input");
  file_picker.type = "file";
  file_picker.accept = "image/*";
  
  
  file_picker.onchange = (e)=>{
    i=i+1;
    e.preventDefault();
    if (!file_picker.value.length) console.log("no file");

    let reader = new FileReader();

    reader.onload = logFile;

    reader.readAsDataURL(file_picker.files[0]);

  };
  file_picker.click();

}


window.addEventListener('resize', function slide() {

  let pics = [];
  let img_viewer = document.getElementById("pics");
  pics = document.getElementById("pics").childNodes;
  let to1;
  let to2;
  let to3;


  if (window.screenTop && window.screenY) {
    toggle = 0;
    pics.forEach((pic, i)=>{
      console.log(i);
      pic.setAttribute("class", "slider");
      
      to1 = setTimeout(()=>{
        pic.setAttribute("class", "slider-active");
        

        to2 = setTimeout(()=>{
          pic.removeAttribute("class", "slider-active");
          pic.setAttribute("class","slider");
        },10000);

        if(i == pics.length-1){
          to3 = setTimeout(()=>{
            slide();
          },10000);
        };

      }, i * 10000);

    });
    let header = document.getElementById("header");
    let footer = document.getElementById("footer");
    let buttons = document.getElementById("buttons");


    header.style.display = "none";
    footer.style.display = "none";
    buttons.style.display = "none";
    img_viewer.style.top="0";
    img_viewer.style.position="relative";
    img_viewer.style.height="100%";
  
  } else if(!window.screenTop && !window.screenY && toggle === 0){

    this.document.location.reload();


  }
  });

