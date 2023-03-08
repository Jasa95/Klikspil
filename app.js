"use strict";
window.addEventListener("load", start);

let points = 0;
let lives = 0;

function start() {
  console.log("JavaScript kører!");
  document.querySelector("#btn_start").addEventListener("click", startGame);
  console.log("Music by StudioKolomna from Pixabay");
}

function startGame() {
  points = 0;
  lives = 3;
  restartGame();
  document.querySelector("#start").classList.add("hidden");

  document.querySelector("#sound_background").play();

  startAllAnimations();

  function startAllAnimations() {
    document.querySelector("#coin1_container").classList.add("running");
    document.querySelector("#coin2_container").classList.add("running");
    document.querySelector("#coin3_container").classList.add("running");
    document.querySelector("#coin4_container").classList.add("running");
    document.querySelector("#bomb1_container").classList.add("running");
    document.querySelector("#bomb2_container").classList.add("running");
    document.querySelector("#heart_container").classList.add("running");
  }
  document
    .querySelector("#coin1_container")
    .addEventListener("mousedown", clickCoin);
  document
    .querySelector("#coin2_container")
    .addEventListener("mousedown", clickCoin2);
  document
    .querySelector("#coin3_container")
    .addEventListener("mousedown", clickCoin3);
  document
    .querySelector("#coin4_container")
    .addEventListener("mousedown", clickCoin4);
  document
    .querySelector("#bomb1_container")
    .addEventListener("mousedown", clickBomb);
  document
    .querySelector("#bomb2_container")
    .addEventListener("mousedown", clickBomb2);
  document
    .querySelector("#heart_container")
    .addEventListener("mousedown", clickHeart);
}

function clickCoin() {
  console.log("Klik Mai Villadsen");
  document
    .querySelector("#coin1_container")
    .removeEventListener("mousedown", clickCoin);

  document.querySelector("#coin1_container").classList.add("paused");

  document.querySelector("#coin1_sprite").classList.add("zoom_out");

  document
    .querySelector("#coin1_container")
    .addEventListener("animationend", coinGone);

  incrementPoints();
}

function clickCoin2() {
  console.log("Klik Pernille Vermund");
  document
    .querySelector("#coin2_container")
    .removeEventListener("mousedown", clickCoin2);

  document.querySelector("#coin2_container").classList.add("paused");

  document.querySelector("#coin2_sprite").classList.add("zoom_out");

  document
    .querySelector("#coin2_container")
    .addEventListener("animationend", coin2Gone);

  incrementPoints();
}

function clickCoin3() {
  console.log("Klik Pia Olsen Dyhr");
  document
    .querySelector("#coin3_container")
    .removeEventListener("mousedown", clickCoin3);

  document.querySelector("#coin3_container").classList.add("paused");

  document.querySelector("#coin3_sprite").classList.add("zoom_out");

  document
    .querySelector("#coin3_container")
    .addEventListener("animationend", coin3Gone);

  incrementPoints();
}
function clickCoin4() {
  console.log("Alex Vanopslagh");
  document
    .querySelector("#coin4_container")
    .removeEventListener("mousedown", clickCoin4);

  document.querySelector("#coin4_container").classList.add("paused");

  document.querySelector("#coin4_sprite").classList.add("zoom_out");

  document
    .querySelector("#coin4_container")
    .addEventListener("animationend", coin4Gone);

  incrementPoints();
}

function coinGone() {
  document
    .querySelector("#coin1_container")
    .removeEventListener("animationend", coinGone);

  document.querySelector("#coin1_sprite").classList.remove("zoom_out");

  document.querySelector("#coin1_container").classList.remove("paused");

  document.querySelector("#coin1_container").classList.remove("running");
  document.querySelector("#coin1_container").offsetWidth;
  document.querySelector("#coin1_container").classList.add("running");

  document
    .querySelector("#coin1_container")
    .addEventListener("mousedown", clickCoin);
}

function coin2Gone() {
  document
    .querySelector("#coin2_container")
    .removeEventListener("animationend", coin2Gone);

  document.querySelector("#coin2_sprite").classList.remove("zoom_out");

  document.querySelector("#coin2_container").classList.remove("paused");

  document.querySelector("#coin2_container").classList.remove("running");
  document.querySelector("#coin2_container").offsetWidth;
  document.querySelector("#coin2_container").classList.add("running");

  document
    .querySelector("#coin2_container")
    .addEventListener("mousedown", clickCoin2);
}

function coin3Gone() {
  document
    .querySelector("#coin3_container")
    .removeEventListener("animationend", coin3Gone);

  document.querySelector("#coin3_sprite").classList.remove("zoom_out");

  document.querySelector("#coin3_container").classList.remove("paused");

  document.querySelector("#coin3_container").classList.remove("running");
  document.querySelector("#coin3_container").offsetWidth;
  document.querySelector("#coin3_container").classList.add("running");

  document
    .querySelector("#coin3_container")
    .addEventListener("mousedown", clickCoin3);
}
function coin4Gone() {
  document
    .querySelector("#coin4_container")
    .removeEventListener("animationend", coin4Gone);

  document.querySelector("#coin4_sprite").classList.remove("zoom_out");

  document.querySelector("#coin4_container").classList.remove("paused");

  document.querySelector("#coin4_container").classList.remove("running");
  document.querySelector("#coin4_container").offsetWidth;
  document.querySelector("#coin4_container").classList.add("running");

  document
    .querySelector("#coin4_container")
    .addEventListener("mousedown", clickCoin4);
}

function clickBomb() {
  console.log("Click bomb");

  document
    .querySelector("#bomb1_container")
    .removeEventListener("mousedown", clickBomb);

  document.querySelector("#bomb1_container").classList.add("paused");

  document.querySelector("#bomb1_sprite").classList.add("zoom_in");

  document
    .querySelector("#bomb1_container")
    .addEventListener("animationend", bombGone);
  document.querySelector("#lars").play();
  decrementLives();
}
function clickBomb2() {
  console.log("Click bomb2");

  document
    .querySelector("#bomb2_container")
    .removeEventListener("mousedown", clickBomb2);

  document.querySelector("#bomb2_container").classList.add("paused");

  document.querySelector("#bomb2_sprite").classList.add("zoom_in");

  document
    .querySelector("#bomb2_container")
    .addEventListener("animationend", bomb2Gone);

  decrementLives();
}

function bombGone() {
  document
    .querySelector("#bomb1_container")
    .removeEventListener("animationend", bombGone);

  document.querySelector("#bomb1_sprite").classList.remove("zoom_in");

  document.querySelector("#bomb1_container").classList.remove("paused");

  document.querySelector("#bomb1_container").classList.remove("running");
  document.querySelector("#bomb1_container").offsetWidth;
  document.querySelector("#bomb1_container").classList.add("running");

  document
    .querySelector("#bomb1_container")
    .addEventListener("mousedown", clickBomb);
}
function bomb2Gone() {
  document
    .querySelector("#bomb2_container")
    .removeEventListener("animationend", bomb2Gone);

  document.querySelector("#bomb2_sprite").classList.remove("zoom_in");

  document.querySelector("#bomb2_container").classList.remove("paused");

  document.querySelector("#bomb2_container").classList.remove("running");
  document.querySelector("#bomb2_container").offsetWidth;
  document.querySelector("#bomb2_container").classList.add("running");

  document
    .querySelector("#bomb2_container")
    .addEventListener("mousedown", clickBomb2);
}

function clickHeart() {
  console.log("Click heart");

  document
    .querySelector("#heart_container")
    .removeEventListener("mousedown", clickHeart);

  document.querySelector("#heart_container").classList.add("paused");

  document.querySelector("#heart_sprite").classList.add("zoom_out");

  document
    .querySelector("#heart_container")
    .addEventListener("animationend", heartGone);

  incrementLives();
}

function heartGone() {
  document
    .querySelector("#heart_container")
    .removeEventListener("animationend", heartGone);

  document.querySelector("#heart_sprite").classList.remove("zoom_out");

  document.querySelector("#heart_container").classList.remove("paused");

  document.querySelector("#heart_container").classList.remove("running");
  document.querySelector("#heart_container").offsetWidth;
  document.querySelector("#heart_container").classList.add("running");

  document
    .querySelector("#heart_container")
    .addEventListener("mousedown", clickHeart);
}

function incrementPoints() {
  console.log("+Point");
  document.querySelector("#mette").play();
  points++;
  console.log(points + "point samlet");
  displayPoints();
  if (points >= 15) {
    levelComplete();
  }
}

function displayPoints() {
  console.log("viser point");
  document.querySelector("#coin_count").textContent = points;
}

function decrementLives() {
  console.log("Åh nej, du mistede en samarbejdspartner og et liv! </3");
  showDecrementedLives();

  lives--;

  if (lives <= 0) {
    gameOver();
  }
}

function incrementLives() {
  if (lives == 3) {
    console.log("På, brors, du har fuldt liv og får ekstra point i stedet!");
    incrementPoints();
  } else {
    console.log("+Liv");
    lives++;
    showIncrementedLives();
  }
}

function showDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function showIncrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("broken_heart");
  document.querySelector("#heart" + lives).classList.add("active_heart");
}

function levelComplete() {
  console.log("Sygt! Nu skal dronningen bare underskrive");
  document.querySelector("#level_complete").classList.remove("hidden");
  stopGame();

  document.querySelector("#btn_restart").addEventListener("click", startGame);
}

function gameOver() {
  console.log("Game over - du valgte for mange dejlige mænd fra!");
  document.querySelector("#game_over").classList.remove("hidden");
  stopGame();
  document.querySelector("#sound_game_over").play();
  document.querySelector("#btn_restart").addEventListener("click", startGame);
}

function stopGame() {
  document.querySelector("#coin1_container").classList.remove("running");
  document.querySelector("#coin2_container").classList.remove("running");
  document.querySelector("#coin3_container").classList.remove("running");
  document.querySelector("#coin4_container").classList.remove("running");
  document.querySelector("#bomb1_container").classList.remove("running");
  document.querySelector("#bomb2_container").classList.remove("running");
  document.querySelector("#heart_container").classList.remove("running");

  document
    .querySelector("#coin1_container")
    .removeEventListener("mousedown", clickCoin);
  document
    .querySelector("#coin2_container")
    .removeEventListener("mousedown", clickCoin);
  document
    .querySelector("#coin3_container")
    .removeEventListener("mousedown", clickCoin);
  document
    .querySelector("#coin4_container")
    .removeEventListener("mousedown", clickCoin);
  document
    .querySelector("#bomb1_container")
    .removeEventListener("mousedown", clickBomb);
  document
    .querySelector("#bomb2_container")
    .removeEventListener("mousedown", clickBomb);
  document
    .querySelector("#heart_container")
    .removeEventListener("mousedown", clickHeart);

  document.querySelector("#sound_background").pause();
  document.querySelector("#sound_background").currentTime = 0;
}

function restartGame() {
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
}
