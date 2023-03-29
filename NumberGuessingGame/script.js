const answer = Math.floor(Math.random()*100+1);
console.log(answer);
let guesses = 0;
document.getElementById("submit button").onclick =function () {
    let guess=document.getElementById("guess field ").value;
    guesses+=1;

    if(guess==answer){
        alert(`${answer} is the correct number it took you ${guesses} guesses`);

    }
    else if (guess<answer){

        alert("too small ");
    }
    else{

        alert("too big");
    }
    
}