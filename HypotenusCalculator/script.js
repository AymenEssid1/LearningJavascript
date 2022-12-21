

console.log("greetings noob");


document.getElementById("SUBMIT").onclick = function () {
    let side1 = Number(document.getElementById("side1").value);
    let side2 = Number(document.getElementById("side2").value);
    let hypo;
    hypo=String(Math.sqrt(Math.pow(side1,2)+Math.pow(side2,2)));
    console.log(hypo);
    document.getElementById("pp").innerHTML = hypo ;
}
