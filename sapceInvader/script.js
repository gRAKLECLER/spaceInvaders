let hero = {
  top: 600,
  left: 550
};

let pScore = 0;

let missiles = [];

let enemies = [
  { left: 200, top: 100 },
  { left: 300, top: 100 },
  { left: 400, top: 100 },
  { left: 500, top: 100 },
  { left: 600, top: 100 },
  { left: 700, top: 100 },
  { left: 800, top: 100 },
  { left: 900, top: 100 },
  { left: 200, top: 175 },
  { left: 300, top: 175 },
  { left: 400, top: 175 },
  { left: 500, top: 175 },
  { left: 600, top: 175 },
  { left: 700, top: 175 },
  { left: 800, top: 175 },
  { left: 900, top: 175 }
];

document.onkeydown = function(e) {
  console.log(e.keyCode);
  if (e.keyCode === 37) {
    hero.left = hero.left - 20;
    moveHero();
  } else if (e.keyCode === 39) {
    hero.left = hero.left + 20;
    moveHero();
  } else if (e.keyCode === 38) {
    hero.top = hero.top - 20;
    moveHero();
  } else if (e.keyCode === 40) {
    hero.top = hero.top + 20;
    moveHero();
  } else if (e.keyCode === 32) {
    missiles.push({
      left: hero.left + 15,
      top: hero.top
    });
    console.log(missiles);
    drawMissiles();
  }
};

const updateScore = () => {
  const playerScore = document.getElementById("score");
  playerScore.textContent = pScore;
};

function moveHero() {
  document.getElementById("hero").style.left = hero.left + "px";
  document.getElementById("hero").style.top = hero.top + "px";
}

function drawMissiles() {
  document.getElementById("missiles").innerHTML = "";
  for (let missile = 0; missile < missiles.length; missile = missile + 1) {
    document.getElementById(
      "missiles"
    ).innerHTML += `<div class='missile' style='left:${missiles[missile].left}px;
    top:${missiles[missile].top}px'></div>`;
  }
}

function movesMissiles() {
  for (let missile = 0; missile < missiles.length; missile = missile + 1) {
    missiles[missile].top = missiles[missile].top - 5;
  }
}

function drawEnemies() {
  document.getElementById("enemies").innerHTML = "";
  for (let enemy = 0; enemy < enemies.length; enemy = enemy + 1) {
    document.getElementById(
      "enemies"
    ).innerHTML += `<div class='enemy' style='left:${enemies[enemy].left}px;
    top:${enemies[enemy].top}px'></div>`;
  }
}

function movesEnemies() {
  for (let enemy = 0; enemy < enemies.length; enemy = enemy + 1) {
    enemies[enemy].top = enemies[enemy].top + 0;
  }
}

function collisionDetection() {
  for (let enemy = 0; enemy < enemies.length; enemy = enemy + 1) {
    for (let missile = 0; missile < missiles.length; missile = missile + 1) {
      if (
        missiles[missile].top <= enemies[enemy].top + 50 &&
        missiles[missile].top > enemies[enemy].top &&
        missiles[missile].left <= enemies[enemy].left + 50 &&
        missiles[missile].left > enemies[enemy].left
      ) {
        enemies.splice(enemy, 1);
        missiles.splice(missile, 1);
        pScore += 100;
        updateScore();
        return;
      }
    }
  }
}

function gameOver() {
  if (enemies === 500) {
    alert("gameover");
    console.log("ok");
  }
}

function gameLoop() {
  setTimeout(gameLoop, 100);
  movesMissiles();
  drawMissiles();
  movesEnemies();
  drawEnemies();
  collisionDetection();
}
gameLoop();

//BONUS
/*a faire avant la rentrer si possible
1.move hero top and down
2.faire desecendre les ennemies en les faisant allez 1 fois a gauche
puis une fois a droite
3.Add score;
*/
