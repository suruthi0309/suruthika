const box1=document.getElementById("box1");
const moveAmount=10;
let x=0;
let y=0;

document.addEventListener("keydown",event=>{
    box1.textContent="J❤️S";
    box1.style.backgroundColor="lightpink";
});
document.addEventListener("keyup",event=>{
    box1.textContent="😊";
    box1.style.backgroundColor="rgb(155, 90, 216)";
});

document.addEventListener("keydown",event=>{
    if (event.key.startsWith("Arrow")){

        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
              y-=moveAmount;
              break;
            case "ArrowDown":
              y+=moveAmount;
              break;
            case "ArrowLeft":
              x-=moveAmount;
              break;
            case "ArrowRight":
              x+=moveAmount;
              break;
        }
        box1.style.top=`${y}px`;
        box1.style.left=`${x}px`;
    }
});