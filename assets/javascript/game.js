
function compPick(){
let alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(randomLetter)}

let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(randomLetter)}
let wins= 0;

let losses= 0;

let guessesLeft= 10;

let guesses= [];
    //when user presses letters on keyboard run this function
document.onkeyup = function(event){
    let userGuess= event.key;
   
    if (randomLetter === userGuess){
        //start new round
        wins++; guessesLeft= 10; guesses= []; compPick();
}
    else {
        guessesLeft--; guesses.push(userGuess);
}

    if (guessesLeft === 0){
        losses++; guessesLeft= 10;
}
 //html
 document.getElementById("wins").innerHTML = " " + wins;
 document.getElementById("losses").innerHTML = " " + losses;
 document.getElementById("guessesLeft").innerHTML = " " + guessesLeft;
 document.getElementById("userGuess").innerHTML = " " + guesses + " ";
}
