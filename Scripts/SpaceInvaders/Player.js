export default class Player {
  rightPressed = false;
  leftPressed = false;
  shootPressed = false;

  constructor(canvas, velocity, bulletController) {
    this.canvas = canvas;
    this.velocity = velocity;
    this.bulletController = bulletController;

    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 75;
    this.width = 50;
    this.height = 48;
    this.image = new Image();
    this.image.src = "/images/player.png";

    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));
  }

  draw(ctx) {
    if (this.shootPressed) {
      this.bulletController.shoot(this.x + this.width / 2, this.y, 4, 10);
    }
    this.move();
    this.collideWithWalls();
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  collideWithWalls() {
    // left
    if (this.x < 0) {
      this.x = 0;
    }

    // right
    if (this.x > this.canvas.width - this.width) {
      this.x = this.canvas.width - this.width;
    }
  }

  move() {
    if (this.rightPressed) {
      this.x += this.velocity;
    } else if (this.leftPressed) {
      this.x -= this.velocity;
    }
  }

  keydown(event) {
    if (event.code === "ArrowRight") {
      this.rightPressed = true;
      event.preventDefault(); // Evita el comportamiento predeterminado de la flecha derecha
    }
    if (event.code === "ArrowLeft") {
      this.leftPressed = true;
      event.preventDefault(); // Evita el comportamiento predeterminado de la flecha izquierda
    }
    if (event.code === "Space") {
      this.shootPressed = true;
      event.preventDefault(); // Evita el comportamiento predeterminado de la barra espaciadora
    }
  }

  keyup(event) {
    if (event.code === "ArrowRight") {
      this.rightPressed = false;
      event.preventDefault(); // Evita el comportamiento predeterminado de la flecha derecha
    }
    if (event.code === "ArrowLeft") {
      this.leftPressed = false;
      event.preventDefault(); // Evita el comportamiento predeterminado de la flecha izquierda
    }
    if (event.code === "Space") {
      this.shootPressed = false;
      event.preventDefault(); // Evita el comportamiento predeterminado de la barra espaciadora
    }
  }
}
