// 🎯 High-Low Number Guessing Game Starter
// You will use prompt(), alert(), and confirm() to make an interactive guessing game!

function playHighLowGame() {
  // Welcome message
  window.alert("Welcome to Jenn's High-Low Number Guessing Game!");
  window.alert("I'm thinking of a number between 1 and 100...");

  // TODO: Create a random number between 1 and 100 and store it in a variable called targetNumber
  // Example: const targetNumber = Math.floor(Math.random() * 100) + 1;
const targetNumber = Math.floor(Math.random() * 100) + 1;

let guess = null;
let playAgain = true;
  // TODO: Create a variable to track how many guesses the player has made
  let attemptsNumber = 0;
  // Create a variable to store the player's current guess
  let currentGuess = null;

  // TODO: Create a loop that keeps asking the player for a guess until they guess correctly
  // Use window.prompt() to ask for a number
  // Inside your loop:
  // 1️⃣ Convert the input to a number using parseInt()
  // 2️⃣ Check if the guess is too high, too low, or correct
  // 3️⃣ Use window.alert() to tell the player the result
  // 4️⃣ Count the number of attempts
const maxAttempts = 9;

  while (attemptsNumber < maxAttempts) {
    guess = window.prompt("Enter your guess (1–100):");
    if (guess === null) {
      window.alert("👋 Game canceled. Maybe next time!");
      return;
    }

    // Convert guess to a number
    guess = parseInt(guess.trim(), 10);

    // Validate input
    if (isNaN(guess) || guess < 1 || guess > 100) {
      window.alert("⚠️ Please enter a valid number between 1 and 100.");
      continue;
    }

    attemptsNumber++;
  // TODO: When the player guesses correctly:
  // - Alert them that they won and show how many attempts it took
  // - Ask if they want to play again using window.confirm()
  // - If yes, call playHighLowGame() again
  // - If no, show a “Thanks for playing” message
  if (guess === targetNumber) {
    window.alert(`🎉 Correct! You guessed the number ${targetNumber} in ${attemptsNumber} attempts!`);
    // Ask if the player wants to play again
    playAgain = window.confirm("Would you like to play again?");
    if (playAgain) {
      // Restart the game
      playHighLowGame();
    } else {
      window.alert("Thanks for playing! 👋");
    }
    return; // Exit current game loop
  } else if (guess < targetNumber) {
    window.alert("📉 Too low! Try a higher number.");
  } else {
    window.alert("📈 Too high! Try a lower number.");
  }
}
//Player ran out of attempts
window.alert(`😭 You've made ${maxAttempts} attempts. Game over! The correct number was ${targetNumber}.`);
//Ask if they want to play again
playAgain = window.confirm("Would you like to play again?");
if (playAgain) {
  //Restart the game
  playHighLowGame();
} else {
  window.alert("Thanks for playing! 👋");
}
}
// 🚀 Call the function to start the game
playHighLowGame();