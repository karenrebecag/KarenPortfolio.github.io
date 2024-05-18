import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import BulletController from "./BulletController.js";
import ScoreController from "./ScoreController.js";

const canvas = document.getElementById("spaceInvaders");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

const background = new Image();
background.src = "/images/space.png";

let playerBulletController = new BulletController(canvas, 10, "purple", true);
let enemyBulletController = new BulletController(canvas, 4, "white", false);
let scoreController = new ScoreController();
let enemyController = new EnemyController(canvas, enemyBulletController, playerBulletController, scoreController);
let player = new Player(canvas, 3, playerBulletController);

let isGameOver = false;
let didWin = false;
let isGameStarted = false;

const explosionSound = new Audio("/images/explosion.wav");
explosionSound.volume = 0.5;

// Cargar la fuente personalizada
const customFont = new FontFace('BNMachine', 'url(/images/BNMachine.ttf)');

customFont.load().then((loadedFont) => {
    document.fonts.add(loadedFont);
    console.log('Fuente BNMachine cargada y lista para usar');
});

function game() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    if (!isGameStarted) {
        displayStartText();
        return;
    }

    checkGameOver();
    displayGameOver();
    if (!isGameOver) {
        enemyController.draw(ctx);
        player.draw(ctx);
        playerBulletController.draw(ctx);
        enemyBulletController.draw(ctx);
        scoreController.draw(ctx, canvas.width);
    }
}

function displayStartText() {
    ctx.fillStyle = "white";
    ctx.font = "30px 'BNMachine', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Press Space to Start", canvas.width / 2, canvas.height / 2);
}

function displayGameOver() {
    if (isGameOver) {
        let text = didWin ? "You Win" : "Game Over";
        ctx.fillStyle = "white";
        ctx.font = "70px 'BNMachine', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);

        ctx.font = "20px 'BNMachine', sans-serif";
        if (didWin) {
            ctx.fillText("Press Space to Continue Playing", canvas.width / 2, canvas.height / 2 + 50);
        } else {
            ctx.fillText("Press Space to Start Again", canvas.width / 2, canvas.height / 2 + 50);
        }
    }
}

function checkGameOver() {
    if (isGameOver) {
        return;
    }

    if (enemyBulletController.collideWith(player) || enemyController.collideWith(player)) {
        isGameOver = true;
        explosionSound.currentTime = 0;
        explosionSound.play();
    }

    if (enemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
    }
}

function resetGame() {
    isGameOver = false;
    didWin = false;

    playerBulletController = new BulletController(canvas, 10, "red", true);
    enemyBulletController = new BulletController(canvas, 4, "white", false);

    if (!didWin) {
        scoreController.resetScore();
    }

    enemyController = new EnemyController(canvas, enemyBulletController, playerBulletController, scoreController);
    player = new Player(canvas, 3, playerBulletController);
}

document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        if (!isGameStarted) {
            isGameStarted = true;
        } else if (isGameOver) {
            resetGame();
        }
        event.preventDefault();
    }
});

setInterval(game, 1000 / 60);
