function logFile (event) {
  let img_viewer = document.querySelector("#pics");
  let str = event.target.result;
  let img = document.createElement('img');
  img.setAttribute("class", "pic");
  img.setAttribute("id", "image"+i);
  localStorage.setItem("image"+ i, str);
  img.src = localStorage.getItem("image"+i);
  img_viewer.append(img);
  console.log(localStorage);

  img.addEventListener("click", ()=>{
    img.remove();
    let img_name = img.getAttribute("id");
    console.log(img_name);
    localStorage.removeItem(img.id);
  
  });
  
}


let i = 0;
window.addEventListener("load", ()=>{
  console.log(localStorage);
  let img_viewer = document.querySelector("#pics");
  console.log(localStorage.length);

  for(var i = 0; i < localStorage.length; i++){
    let img = document.createElement("img");
    img.src = localStorage.getItem("image"+ (i+1));
    img.setAttribute("class", "pic");
    img.setAttribute("id", "image"+(i+1))
    img_viewer.append(img);

    img.addEventListener("click", ()=>{
      img.remove();
      let img_name = img.getAttribute("id");
      console.log(img_name);
      localStorage.removeItem(img.id);
    
    });
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
    console.log(i);

  };
  file_picker.click();
 


}
function slide(){

  
  let pics = [];
  let img_viewer = document.getElementById("pics");
  pics = document.getElementById("pics").childNodes;
  openFullscreen(img_viewer);

  pics.forEach((pic, i)=>{
    pic.removeAttribute("class");
    pic.setAttribute("class", "slider");
    
    setTimeout(()=>{
      pic.setAttribute("class", "slider-active");
      

      setTimeout(()=>{
        pic.removeAttribute("class", "slider-active");
        pic.setAttribute("class","slider");
      },10000);

        if(i == pics.length-1){
          setTimeout(()=>{
            slide();
          },10000);
        };

    }, i * 10000);
    


  })



  let header = document.getElementById("header");
  let footer = document.getElementById("footer");
  let buttons = document.getElementById("buttons");
  
  
  header.style.display = "none";
  footer.style.display = "none";
  buttons.style.display = "none";
  img_viewer.style.top="0";
  img_viewer.style.position="relative";
  img_viewer.style.height="100%";


}
function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
  




