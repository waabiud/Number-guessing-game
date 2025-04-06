// Generate a random number between 1 and 100
let numberToGuess = Math.floor(Math.random() * 100) + 1;
let hintElement = document.getElementById('hint');
let guessInput = document.getElementById('guess');
let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', checkGuess);

function checkGuess() {
    let userGuess = parseInt(guessInput.value);
    if (isNaN(userGuess)) {
        hintElement.textContent = 'Please enter a valid number';
        return;
    }
    if (userGuess < 1 || userGuess > 100) {
        hintElement.textContent = 'Please enter a number between 1 and 100';
        return;
    }
    if (userGuess < numberToGuess) {
        hintElement.textContent = 'Too low!';
    } else if (userGuess > numberToGuess) {
        hintElement.textContent = 'Too high!';
    } else {
        hintElement.textContent ='Congratulations! You guessed the number!';
        submitButton.disabled = true;
    }
}
