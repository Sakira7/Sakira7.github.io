function logFile (event) {
    let img_viewer = document.querySelector("#pics");
    let str = event.target.result;
    let img = document.createElement('img');
    img.setAttribute("class", "pic");
    localStorage.setItem("image"+ i, str);
    img.src = localStorage.getItem("image"+i);
    img_viewer.append(img);
    
  }
  
  
  let i = 0;
  window.addEventListener("load", ()=>{
    console.log(localStorage);
    let img_viewer = document.querySelector("#pics");
  
    for(var i = 0; i < localStorage.length; i++){
      let img = document.createElement("img");
      img.src = localStorage.getItem("image"+i);
      img.setAttribute("class", "pic");
      img_viewer.append(img);
    }
    
    
    
  });
  
  
  
  function handleSubmit () {
    
    //localStorage.clear();
    console.log(localStorage);
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
   
  
      document.getElementById("begin").addEventListener("click", ()=>{
  
          let pics = [];
          pics = document.getElementById("pics").childNodes;
          console.log(localStorage);
          
          
          pics.forEach((pic)=>{
              pic.removeAttribute("class", "pic");
              pic.setAttribute("class","slider"); 
  
          });
          
          
          let header = document.getElementById("header");
          let footer = document.getElementById("footer");
          let buttons = document.getElementById("buttons");
          let img_viewer = document.getElementById("pics");
          
          header.style.display = "none";
          footer.style.display = "none";
          buttons.style.display = "none";
          img_viewer.style.top="0";
  
  
      });
  }
      
  




