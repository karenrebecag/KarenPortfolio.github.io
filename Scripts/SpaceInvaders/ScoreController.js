export default class ScoreController {
    constructor() {
        this.score = 0;
        this.loadScore();
    }

    addScore(scoreValue) {
        this.score += scoreValue;
        this.saveScore();
    }

    resetScore() {
        this.score = 0;
        this.saveScore();
    }

    loadScore() {
        const savedScore = localStorage.getItem('score');
        if (savedScore !== null) {
            this.score = parseInt(savedScore, 10);
        }
    }

    saveScore() {
        localStorage.setItem('score', this.score);
    }

    draw(ctx, canvasWidth) {
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.textAlign = "right";
        ctx.fillText(`Score: ${this.score}`, canvasWidth - 10, 20);
    }
}
    