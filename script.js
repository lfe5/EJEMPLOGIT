let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const result = document.getElementById('result');

  if (isNaN(guess) || guess < 1 || guess > 10) {
    result.textContent = 'Por favor, ingresa un número válido entre 1 y 10.';
    return;
  }

  if (guess === secretNumber) {
    result.textContent = '¡Correcto! 🎉 Adivinaste el número.';
  } else {
    result.textContent = guess < secretNumber
      ? 'Demasiado bajo. Intenta de nuevo.'
      : 'Demasiado alto. Intenta de nuevo.';
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById('guessInput').value = '';
  document.getElementById('result').textContent = '';
}