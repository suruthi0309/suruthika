const num1=document.getElementById("num1");
const toFahrenhiet=document.getElementById("toFahrenhiet");
const toCelsius=document.getElementById("toCelsius");
const command=document.getElementById("command");
let ans;
function check()
{
    if(toFahrenhiet.checked){
        ans=Number(num1.value);
        ans=ans*9/5+32;
        command.textcontent=ans+"°F";
 

    }
    elseif (toCelsius.checked){

    }
    else{
        command.textContent="select a unit";
    }
}