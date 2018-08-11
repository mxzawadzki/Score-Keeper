var playerOne = document.querySelector("#playerOne");
var playerTwo = document.querySelector("#playerTwo");
var playerOneDisplay = document.querySelector("#playerOneDisplay")
var playerTwoDisplay = document.querySelector("#playerTwoDisplay")
var playerOneScore = 0;
var playerTwoScore = 0;
var gameOver = false;
var winningScore = 5;
var resetScore = document.querySelector("#reset");
var maxScore = document.querySelector("#maxScore");
var maxScoreDisplay = document.querySelector("#maxScoreDisplay");
var submitMaxScore = document.querySelector("#submitMaxScore");

playerOne.addEventListener("click", function() {
  if (!gameOver) {
    playerOneScore++;
    if (playerOneScore === winningScore) {
      playerOneDisplay.classList.add("results__score--winner");
      gameOver = true;
    }
    playerOneDisplay.textContent = playerOneScore;
  }
});

playerTwo.addEventListener("click", function () {
  if (!gameOver) {
    playerTwoScore++;
    if (playerTwoScore === winningScore) {
      playerTwoDisplay.classList.add("results__score--winner");
      gameOver = true;
    }
    playerTwoDisplay.textContent = playerTwoScore;
  }
});

resetScore.addEventListener("click", function() {
  reset()
});

function reset() {
  playerOneScore = 0;
  playerOneDisplay.textContent = playerOneScore;
  playerOneDisplay.classList.remove("results__score--winner");
  playerTwoScore = 0;
  playerTwoDisplay.textContent = playerTwoScore;
  playerTwoDisplay.classList.remove("results__score--winner");
  gameOver = false;
}

maxScore.addEventListener("change", function() {
  if (Number(this.value) < 1) {
    alert("Please enter number greater than 0");
  } else {
    maxScoreDisplay.textContent = parseInt(this.value);
    winningScore = parseInt(Number(this.value));
    reset();
  }
});

submitMaxScore.addEventListener("change", function () {
  if (Number(this.value) < 1) {
    alert("Please enter number greater than 0");
  } else {
    maxScoreDisplay.textContent = parseInt(maxScore.value);
    winningScore = parseInt(Number(this.value));
    reset();
  }
});