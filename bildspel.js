
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


  img.addEventListener("click", (e, i)=>{
    i = e.target.id;
    
    let last = localStorage.length;
    console.log(localStorage);
    if(i === 7){
      e.target.remove;
      localStorage.removeItem(i);
    }else{
      e.preventDefault();
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

function startslide(){
  window.open("slide.html");
}

