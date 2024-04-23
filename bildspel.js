function addFiles(){
    
    let input = document.createElement('input');
    input.type = 'file';

    function encodeImageFileAsURL(element) {
        var file = element.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
          console.log('RESULT', reader.result)
        }
        reader.readAsDataURL(file); 
    }

    input.onchange = _ => {
        
        let img_viewer = document.getElementById("pics");
        
        let files = Array.from(input.files);

        
        for(var i=0;i<files.length;i++){
            
            localStorage.setItem("img"+i, files[i]);
            let pic = document.createElement("img");
            pic.setAttribute("class","pic");
            pic.setAttribute("src", files[i].name);
            img_viewer.append(pic);

        }
        
        
    };
    
    input.click();
    
    
    document.getElementById("begin").addEventListener("click", ()=>{

        let pics = [];
        pics = document.getElementById("pics").childNodes;
        
        
        pics.forEach((pic)=>{
            pic.removeAttribute("class", "pic");
            pic.setAttribute("class","slider"); 
            console.log(pic);
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





