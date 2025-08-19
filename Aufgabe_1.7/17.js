const randomNumber = Math.floor(Math.random() * 100);

let guessedNumber;

while (guessedNumber !== randomNumber) {
  guessedNumber = prompt("Guess a number between 0 and 100: ");

  if (guessedNumber < randomNumber) {
    alert("Too low! Try again.");
  } else if (guessedNumber > randomNumber) {
    alert("Too high! Try again.");
  } else {
    alert("Congratulations! You've guessed the number: " + randomNumber);
  }
}
