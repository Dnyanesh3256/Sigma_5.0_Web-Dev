const maxNum = prompt("Enter the Maximum Number : ");

const random = Math.floor(Math.random() * maxNum) + 1;

let guess = prompt("Guess the number : ");

while(true){
    if(guess == "quit"){
        console.log("You quit the game.")
        break;
    }

    if(guess == random){
        alert(`Congrats you guessed right. The random number was ${random}`);
        break;
    }else if(guess > random){
        guess = prompt("Your guess was too large. Please guess the number again.");
    }else{
        guess = prompt("Your guess was too small. Please guess the number again.");
    }
}