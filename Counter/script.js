console.log("greetings noob");





document.getElementById("decrease").onclick=function () {
    let counter=Number(document.getElementById("count").innerHTML);
    counter-=1;
    document.getElementById("count").innerHTML=counter;
}

document.getElementById("reset").onclick=function () {
    let counter=Number(document.getElementById("count").innerHTML);
    counter=0;
    document.getElementById("count").innerHTML=counter;
}

document.getElementById("increase").onclick=function () {
    let counter=Number(document.getElementById("count").innerHTML);
    counter+=1;
    document.getElementById("count").innerHTML=counter;
}

document.getElementById("random").onclick=function () {
    let random=Math.floor(Math.random()*10+1);
    document.getElementById("randomnb").innerHTML=random;}