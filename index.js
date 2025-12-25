const box=document.querySelectorAll(".box");
const background= document.body;
box.forEach((b)=>{
    b.addEventListener("click",()=>{
          let color=b.dataset.color;
          //console.log(color);
          background.style.backgroundColor=color;
    });
    
});
