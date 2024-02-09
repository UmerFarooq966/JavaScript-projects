window.addEventListener("load", init);
// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
};

// To change level
var currentLevel = levels.easy;

const gameLevel = document.getElementById("game-level");

gameLevel.addEventListener("change", gameLevelfn);

function gameLevelfn(e) {
  levelVlaue = gameLevel.value;

  if (levelVlaue == "easy") {
    currentLevel = levels.easy;
  } else if (levelVlaue == "medium") {
    currentLevel = levels.medium;
  } else if (levelVlaue == "hard") {
    currentLevel = levels.hard;
  } else {
    currentLevel = levels.easy;
  }
  // console.log(currentLevel); \\
}

let time = currentLevel;
let score = 0;
let isPlaying;

// Dom Elements
const wordInput = document.getElementById("word-input");
const currentWord = document.getElementById("current-word");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const message = document.getElementById("message");
const seconds = document.getElementById("seconds");

var words = [
  "hat",
  "river",
  "lucky",
  "statue",
  "generate",
  "stubborn",
  "cocktail",
  "runawawy",
  "joke",
  "developer",
  "establishment",
  "hero",
  "javascript",
  "nutrition",
  "revolver",
  "echo",
  "siblings",
  "investigate",
  "horrendous",
  "symptom",
  "laughter",
  "magic",
  "master",
  "space",
  "defination",
];

// Initialize Game
function init() {
  // SHow number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener("input", startMatch);
  // Call Countdown
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  // If score is -1 dispaly 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match  currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML == "Correct!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

// Pick and show random word
function showWord(words) {
  //Generate random array index
  var randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not runout
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML == "Game Over!!!";
    score = -1;
  }
}
