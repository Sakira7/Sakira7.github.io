function addFiles(){
    let input = document.createElement('input');
    input.type = 'file';
    
    let img_viewer = document.getElementById("pics");

    input.onchange = _ => {
        
        let files = Array.from(input.files);
        let pic = document.createElement("img");
        
        for(var i=0;i<files.length;i++){
            
            pic.setAttribute("src",files[i].name);
            pic.setAttribute("class","pic");
            let db = localStorage.setItem(files[i]);
            
            
        }
        img_viewer.append(pic);
        console.log(db);
        
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





