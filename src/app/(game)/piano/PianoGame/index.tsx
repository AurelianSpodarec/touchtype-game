import PianoLine from "./_components/PianoLine";
import PianoParticle from "./_components/PianoParticle";

class PianoGame {
  constructor(canvas, context, audio) {
    this.canvas = canvas;
    this.ctx = context;
    this.lineSpeed = 3;
    this.lines = [];
    this.keys = ["A", "S", "D", "F", "G", "H", "J", "K"];
    this.particles = [];
    this.keysPressed = {};
    this.score = 0;
    this.audio = new Audio('https://archive.org/embed/ComptineDunAutreEte/YannTiersen-ComptineDunAutreEte.mp3');
    this.audio.loop = true;
    this.noteSequence = [
      { key: "A", duration: 1, time: 0 },
      { key: "S", duration: 5, time: 2 },
      { key: "D", duration: 1, time: 4 },
      { key: "J", duration: 5, time: 4 },
      { key: "F", duration: 3, time: 6 },
      { key: "D", duration: 3, time: 9 },
      { key: "J", duration: 4, time: 11 },
      { key: "F", duration: 5, time: 15 },
      { key: "D", duration: 6, time: 15 },
      { key: "J", duration: 4, time: 20 },
      { key: "F", duration: 2, time: 21 },
      // Add more notes and timestamps as needed
    ];
    this.noteIndex = 0;
    this.initializeEventListeners();
    this.startGame();
  }

  
  initializeEventListeners() {
    window.addEventListener("keydown", this.checkKeyPress.bind(this));
    window.addEventListener("keyup", this.checkKeyUp.bind(this));
  }

  checkKeyPress(event) {
    const key = event.key.toUpperCase();
    this.keysPressed[key] = true;

    const hitLine = this.lines.find(line => line.key === key && line.y + line.height >= this.canvas.height - 10);

    if (hitLine) {
      hitLine.hit = true;
      if (!hitLine.sparkles) {
        hitLine.sparkles = true;
        this.createParticles(hitLine.x + hitLine.width / 2, hitLine.y + hitLine.height / 2);
      }
    }
  }

  checkKeyUp(event) {
    const key = event.key.toUpperCase();
    this.keysPressed[key] = false;

    const hitLine = this.lines.find(line => line.key === key && line.hit);

    if (hitLine) {
      hitLine.hit = false;
      hitLine.sparkles = false;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.lines.forEach(line => {
      line.y += this.lineSpeed;
      this.ctx.fillStyle = line.hit ? "#00ff00" : "#333";
      this.ctx.fillRect(line.x, line.y, line.width, line.height);

      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "#fff";
      this.ctx.fillText(line.key, line.x + line.width / 2 - 5, line.y + line.height / 2 + 5);

      if (line.sparkles && this.keysPressed[line.key]) {
        this.drawParticles(line.x + line.width / 2, line.y + line.height / 2);
      }

      if (line.y > this.canvas.height) {
        this.lines.splice(this.lines.indexOf(line), 1);
      }
    });

    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#333";
    this.ctx.fillText(`Score: ${this.score}`, 20, 40);

    requestAnimationFrame(this.draw.bind(this));
  }

  spawnLineByNote() {
    if (this.noteIndex < this.noteSequence.length) {
      const note = this.noteSequence[this.noteIndex];
      const key = note.key;
      const duration = note.duration || 1; // Default duration to 1 second if not specified
      const height = duration * 50; // Adjust the factor based on your preference
  
      const line = new PianoLine(
        key,
        50 * this.keys.indexOf(key) + 10,
        0,
        Math.random() * (60 - 30) + 30,
        height
      );
      this.lines.push(line);
      this.noteIndex++;
    }
  }

  createParticles(x, y) {
    for (let i = 0; i < 10; i++) {
      this.particles.push(new PianoParticle(
        x,
        y,
        Math.random() * 5 + 2,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        "#ffcc00",
        20
      ));
    }
  }

  drawParticles(x, y) {
    for (let i = 0; i < this.particles.length; i++) {
      const particle = this.particles[i];

      this.ctx.fillStyle = particle.color;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();

      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.life--;

      if (particle.life <= 0) {
        this.particles.splice(i, 1);
        i--;
      }
    }
  }

  startGame() {
    this.audio.play();
    setInterval(this.spawnLineByNote.bind(this), 2000);
    this.draw();
  }
}

export default PianoGame;
