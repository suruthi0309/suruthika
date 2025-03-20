const events=document.getElementById("events");
const mybtn=document.getElementById("mybtn");

mybtn.addEventListener("click", event=>{
    events.style.backgroundColor="tomato";
    events.textContent="Angry Mood😡";
})
mybtn.addEventListener("mouseover", event=>{
    events.style.backgroundColor="lightpink";
    events.textContent="be cool😉";
})
mybtn.addEventListener("mouseout", event=>{
    events.style.backgroundColor="rgb(22, 150, 192)";
    events.textContent=" click me 😊";
})