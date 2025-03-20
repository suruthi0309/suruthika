const newlistitem=document.createElement("li");
newlistitem.textContent="Pomegranate";
newlistitem.id="pome";
newlistitem.style.fontweight="bold";
newlistitem.style.backgroundColor="lightpink";
//document.body.append(newlistitem);
//document.body.prepend(newlistitem);
document.getElementById("fruits").append(newlistitem);
const add=document.getElementById(" add");
document.getElementById("fruits").insertBefore(pome,orange)

