const mycar=document.getElementById("mycar");
const mybtn=document.getElementById("mybtn")

mybtn.addEventListener("click",event=>{
    if(mycar.style.visibility==="hidden"){
        mycar.style.visibility="visible"
        mybtn.textContent="HIDE"
        mybtn.style.backgroundColor="tomato"

    }
    else{
         mycar.style.visibility="hidden"
        mybtn.textContent="SHOW"
        mybtn.style.backgroundColor="black"
    }
})