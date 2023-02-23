"use strict";
window.addEventListener("load", AppInit);

function AppInit() {
  console.log("I'm ready! :)");
}

function incrementPoints() {
  console.log("incrementPoints");
  points++;
  displayPoints();
}

// Nedenstående er kald på win/lose-funktioner.
// Selve funktionerne mangler endnu at blive defineret længere nede
if (lives <= 1) {
  gameOver();
} else {
  levelComplete();
}

// funktioner til game won/lost
function gameOver() {}
function levelComplete() {}
