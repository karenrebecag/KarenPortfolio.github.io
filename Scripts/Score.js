export default class Score {
  score = 0;
  HIGH_SCORE_KEY = "highScore";
  textColor = 'black'; // Color inicial basado en el tema claro por defecto

  constructor(ctx, scaleRatio) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.scaleRatio = scaleRatio;
    this.initializeThemeListener();
  }

  initializeThemeListener() {
    document.addEventListener('themeChanged', (event) => {
      // Cambia el color del texto basado en si el tema oscuro está activo
      this.textColor = event.detail.darkMode ? 'white' : 'black';
    });
    
    // Verificar el tema inicial por si la página se recarga y el tema oscuro estaba activo
    const currentTheme = localStorage.getItem('theme');
    this.textColor = (currentTheme === 'dark') ? 'white' : 'black';
  }

  update(frameTimeDelta) {
    this.score += frameTimeDelta * 0.01;
  }

  reset() {
    this.score = 0;
  }

  setHighScore() {
    const highScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
    if (this.score > highScore) {
      localStorage.setItem(this.HIGH_SCORE_KEY, Math.floor(this.score));
    }
  }

  draw() {
    const highScore = Number(localStorage.getItem(this.HIGH_SCORE_KEY));
    const y = 20 * this.scaleRatio;
    const fontSize = 18 * this.scaleRatio;
    this.ctx.font = `${fontSize}px 'Poppins', sans-serif`;
    this.ctx.fillStyle = this.textColor; // Utiliza textColor que cambia con el tema
    const scoreX = this.canvas.width - 75 * this.scaleRatio;
    const highScoreX = scoreX - 125 * this.scaleRatio;

    const scorePadded = Math.floor(this.score).toString().padStart(6, '0');
    const highScorePadded = highScore.toString().padStart(6, '0');

    this.ctx.fillText(scorePadded, scoreX, y);
    this.ctx.fillText(`HI ${highScorePadded}`, highScoreX, y);
  }
}
