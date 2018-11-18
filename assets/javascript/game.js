let alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

let wins= 0;

let losses= 0;

let guessesLeft= 10;

//document.onkeyup = function(event){
    //let userGuess = event.key.toLowerCase();


console.log("hello");


let userGuess= document.getElementById("userGuess");
document.onkeyup = function(event){
  userGuess.textContent = event.key;
}
  

if (randomLetter === userGuess){
        //reset game
        wins++; guessesLeft= 10; userGuess= "";
}
else {
   guessesLeft--; //userGuess appears with comma
}

if (guessesLeft === 0){
    losses++
}

