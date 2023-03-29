
let faren=document.getElementById("faren");
let cel=document.getElementById("celsius");
let converted;

function tocelsius(temp) {
    return(temp-32)*(5/9);

}
function tofarenheit(temp) {
    return temp*9/5+32;

}
let temp;
document.getElementById("submit").onclick=function () {
    if (cel.checked)
    {
        temp=Number(document.getElementById("inputtemp").value);
        temp=tofarenheit(temp);
        temp=temp.toLocaleString(undefined,{style:"unit","unit":"fahrenheit"});
        document.getElementById("result").innerHTML=temp

    }
    if (faren.checked)
    {
        temp=Number(document.getElementById("inputtemp").value);
        temp=tocelsius(temp);
        temp=temp.toLocaleString(undefined,{style:"unit","unit":"celsius"});
        document.getElementById("result").innerHTML=temp





    }

}