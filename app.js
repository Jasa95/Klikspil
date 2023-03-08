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
  // nulstil point og liv
  points = 0;
  lives = 3;

  // skjul startskærm
  document.querySelector("#start").classList.add("hidden");

  // Start baggrundsmusik
  document.querySelector("#sound_background").play();

  // start alle animationer
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
  // Registrer click
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
  // Forhindr gentagne clicks
  document
    .querySelector("#coin1_container")
    .removeEventListener("mousedown", clickCoin);

  // Stop coin container
  document.querySelector("#coin1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#coin1_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#coin1_container")
    .addEventListener("animationend", coinGone);

  // Giv point
  incrementPoints();
}

function clickCoin2() {
  console.log("Klik Pernille Vermund");
  // Forhindr gentagne clicks
  document
    .querySelector("#coin2_container")
    .removeEventListener("mousedown", clickCoin2);

  // Stop coin container
  document.querySelector("#coin2_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#coin2_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#coin2_container")
    .addEventListener("animationend", coin2Gone);

  // Giv point
  incrementPoints();
}

function clickCoin3() {
  console.log("Klik Pia Olsen Dyhr");
  // Forhindr gentagne clicks
  document
    .querySelector("#coin3_container")
    .removeEventListener("mousedown", clickCoin3);

  // Stop coin container
  document.querySelector("#coin3_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#coin3_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#coin3_container")
    .addEventListener("animationend", coin3Gone);

  // Giv point
  incrementPoints();
}
function clickCoin4() {
  console.log("Alex Vanopslagh");
  // Forhindr gentagne clicks
  document
    .querySelector("#coin4_container")
    .removeEventListener("mousedown", clickCoin4);

  // Stop coin container
  document.querySelector("#coin4_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#coin4_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#coin4_container")
    .addEventListener("animationend", coin4Gone);

  // Giv point
  incrementPoints();
}

function coinGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#coin1_container")
    .removeEventListener("animationend", coinGone);

  // fjern forsvind-animation
  document.querySelector("#coin1_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#coin1_container").classList.remove("paused");

  // genstart running animation
  document.querySelector("#coin1_container").classList.remove("running");
  document.querySelector("#coin1_container").offsetWidth;
  document.querySelector("#coin1_container").classList.add("running");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#coin1_container")
    .addEventListener("mousedown", clickCoin);
}

function coin2Gone() {
  // fjern event der bringer os herind
  document
    .querySelector("#coin2_container")
    .removeEventListener("animationend", coin2Gone);

  // fjern forsvind-animation
  document.querySelector("#coin2_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#coin2_container").classList.remove("paused");

  // genstart running animation
  document.querySelector("#coin2_container").classList.remove("running");
  document.querySelector("#coin2_container").offsetWidth;
  document.querySelector("#coin2_container").classList.add("running");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#coin2_container")
    .addEventListener("mousedown", clickCoin2);
}

function coin3Gone() {
  // fjern event der bringer os herind
  document
    .querySelector("#coin3_container")
    .removeEventListener("animationend", coin3Gone);

  // fjern forsvind-animation
  document.querySelector("#coin3_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#coin3_container").classList.remove("paused");

  // genstart running animation
  document.querySelector("#coin3_container").classList.remove("running");
  document.querySelector("#coin3_container").offsetWidth;
  document.querySelector("#coin3_container").classList.add("running");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#coin3_container")
    .addEventListener("mousedown", clickCoin3);
}
function coin4Gone() {
  // fjern event der bringer os herind
  document
    .querySelector("#coin4_container")
    .removeEventListener("animationend", coin4Gone);

  // fjern forsvind-animation
  document.querySelector("#coin4_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#coin4_container").classList.remove("paused");

  // genstart running animation
  document.querySelector("#coin4_container").classList.remove("running");
  document.querySelector("#coin4_container").offsetWidth;
  document.querySelector("#coin4_container").classList.add("running");

  // gør det muligt at klikke på coin igen
  document
    .querySelector("#coin4_container")
    .addEventListener("mousedown", clickCoin4);
}

function clickBomb() {
  console.log("Click bomb");
  // Forhindr gentagne clicks
  document
    .querySelector("#bomb1_container")
    .removeEventListener("mousedown", clickBomb);

  // Stop bomb container
  document.querySelector("#bomb1_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#bomb1_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#bomb1_container")
    .addEventListener("animationend", bombGone);
  document.querySelector("#lars").play();
  decrementLives();
}
function clickBomb2() {
  console.log("Click bomb2");
  // Forhindr gentagne clicks
  document
    .querySelector("#bomb2_container")
    .removeEventListener("mousedown", clickBomb2);

  // Stop bomb container
  document.querySelector("#bomb2_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#bomb2_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#bomb2_container")
    .addEventListener("animationend", bomb2Gone);

  decrementLives();
}

function bombGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#bomb1_container")
    .removeEventListener("animationend", bombGone);

  // fjern forsvind-animation
  document.querySelector("#bomb1_sprite").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#bomb1_container").classList.remove("paused");

  // genstart running animation
  document.querySelector("#bomb1_container").classList.remove("running");
  document.querySelector("#bomb1_container").offsetWidth;
  document.querySelector("#bomb1_container").classList.add("running");

  // gør det muligt at klikke på bomb igen
  document
    .querySelector("#bomb1_container")
    .addEventListener("mousedown", clickBomb);
}
function bomb2Gone() {
  // fjern event der bringer os herind
  document
    .querySelector("#bomb2_container")
    .removeEventListener("animationend", bomb2Gone);

  // fjern forsvind-animation
  document.querySelector("#bomb2_sprite").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#bomb2_container").classList.remove("paused");

  // genstart running animation
  document.querySelector("#bomb2_container").classList.remove("running");
  document.querySelector("#bomb2_container").offsetWidth;
  document.querySelector("#bomb2_container").classList.add("running");

  // gør det muligt at klikke på bomb igen
  document
    .querySelector("#bomb2_container")
    .addEventListener("mousedown", clickBomb2);
}

function clickHeart() {
  console.log("Click heart");
  // Forhindr gentagne clicks
  document
    .querySelector("#heart_container")
    .removeEventListener("mousedown", clickHeart);

  // Stop heart container
  document.querySelector("#heart_container").classList.add("paused");

  // sæt forsvind-animation på heart
  document.querySelector("#heart_sprite").classList.add("zoom_out");

  // når forsvind-animation er færdig: heatGone
  document
    .querySelector("#heart_container")
    .addEventListener("animationend", heartGone);

  incrementLives();
}

function heartGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#heart_container")
    .removeEventListener("animationend", heartGone);

  // fjern forsvind-animation
  document.querySelector("#heart_sprite").classList.remove("zoom_out");

  // fjern pause
  document.querySelector("#heart_container").classList.remove("paused");

  // genstart running animation
  document.querySelector("#heart_container").classList.remove("running");
  document.querySelector("#heart_container").offsetWidth;
  document.querySelector("#heart_container").classList.add("running");

  // gør det muligt at klikke på heart igen
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
  if (points >= 1) {
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
  document.querySelector("#sound_win").play();
}

function gameOver() {
  console.log("Game over - du valgte for mange dejlige mænd fra!");
  document.querySelector("#game_over").classList.remove("hidden");
  stopGame();
  document.querySelector("#sound_game_over").play();
}

function stopGame() {
  // Stop animationer
  document.querySelector("#coin1_container").classList.remove("running");
  document.querySelector("#coin2_container").classList.remove("running");
  document.querySelector("#coin3_container").classList.remove("running");
  document.querySelector("#coin4_container").classList.remove("running");
  document.querySelector("#bomb1_container").classList.remove("running");
  document.querySelector("#bomb2_container").classList.remove("running");
  document.querySelector("#heart_container").classList.remove("running");

  // Fjern click
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

  // Stop og nulstil lyde, fx baggrundsmusik
  document.querySelector("#sound_background").pause();
  document.querySelector("#sound_background").currentTime = 0;
}
