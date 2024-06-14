import PianoLine from "./_components/PianoLine";
import PianoParticle from "./_components/PianoParticle";

const music = [
  {
    name: "Test",
    audio: "test",
    notes: [
      { key: "A", duration: 1, time: 0 },
      { key: "S", duration: 1, time: 1 },
      { key: "D", duration: 1, time: 1.2 },
      { key: "F", duration: 1, time: 1.4 },

      { key: "F", duration: 3, time: 6 },
      { key: "D", duration: 3, time: 9 },
      { key: "J", duration: 4, time: 11 },
      { key: "F", duration: 5, time: 15 },
      { key: "D", duration: 6, time: 15 },
      { key: "J", duration: 4, time: 20 },
      { key: "L", duration: 4, time: 20 },
      { key: "A", duration: 1, time: 21 },
      { key: "S", duration: 1, time: 22 },
      { key: "D", duration: 1, time: 23 },
      { key: "F", duration: 1, time: 24 },
      { key: "M", duration: 6, time: 26 },
    ],
  },
];

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
    this.audio = new Audio(
      "https://archive.org/embed/ComptineDunAutreEte/YannTiersen-ComptineDunAutreEte.mp3"
    );
    this.audio.loop = true;
    this.noteSequence = music[0].notes;
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

    const hitLine = this.lines.find(
      (line) =>
        line.key === key && line.y + line.height >= this.canvas.height - 10
    );

    if (hitLine) {
      hitLine.hit = true;
      if (!hitLine.sparkles) {
        hitLine.sparkles = true;
        this.createParticles(
          hitLine.x + hitLine.width / 2,
          hitLine.y + hitLine.height / 2
        );
      }
    }
  }

  checkKeyUp(event) {
    const key = event.key.toUpperCase();
    this.keysPressed[key] = false;

    const hitLine = this.lines.find((line) => line.key === key && line.hit);

    if (hitLine) {
      hitLine.hit = false;
      hitLine.sparkles = false;
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.lines.forEach((line) => {
      line.y += this.lineSpeed;
      // this.ctx.fillStyle = line.hit ? "#00ff00" : "#333";
      // this.ctx.fillRect(line.x, line.y, line.width, line.height, 50);
      this.ctx.beginPath();
      this.ctx.fillStyle = "green";
      this.ctx.roundRect(
        line.x,
        line.y,
        line.width,
        line.height,
        line.borderRadius
      );
      this.ctx.stroke();

      this.ctx.font = "20px Arial";
      this.ctx.fillStyle = "#fff";
      this.ctx.fillText(
        line.key,
        line.x + line.width / 2 - 5,
        line.y + line.height / 2 + 5
      );

      if (line.sparkles && this.keysPressed[line.key]) {
        this.drawParticles(
          line.x + line.width / 2,
          line.y + line.height / 2
        );
      }

      if (line.y > this.canvas.height) {
        this.lines.splice(this.lines.indexOf(line), 1);
      }
    });

    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "#777";
    this.ctx.fillText(`Score: ${this.score}`, 20, 40);

    requestAnimationFrame(this.draw.bind(this));
  }

  spawnLineByNote() {
    if (this.noteIndex < this.noteSequence.length) {
      const note = this.noteSequence[this.noteIndex];
      const key = note.key;
      const x = 100 * this.keys.indexOf(key) + 10;
      const y = 0;
      const duration = note.duration || 1;
      const height = duration * 50;
      const width = 50;
      const borderRadius = 10;

      const line = new PianoLine(key, x, y, width, height, borderRadius);
      this.lines.push(line);
      this.noteIndex++;
    }
  }

  createParticles(x, y) {
    for (let i = 0; i < 10; i++) {
      this.particles.push(
        new PianoParticle(
          x,
          y,
          Math.random() * 5 + 2,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          "#ffcc00",
          20
        )
      );
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
    setTimeout(() => {
      this.audio.play();
      setInterval(this.spawnLineByNote.bind(this), 1000 / this.lineSpeed);
      this.draw();
    }, 2000);
  }
}

export default PianoGame;
