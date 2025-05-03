const favMovie = "MAD";
let guess = prompt("Guess my favourite movie :) ");

while((guess != favMovie) && (guess != "QUIT")){
    guess = prompt("Wrong guess!! Please try again...");
}

if(guess == favMovie){
    console.log("Congrats!! You guessed right.");
}else{
    console.log("You quit the game.");
}