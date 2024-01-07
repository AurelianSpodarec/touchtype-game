class SnowEffect {
  constructor(canvas, context) {
    this.W = window.innerWidth;
    this.H = window.innerHeight;
    this.$canvas = canvas;
    this.ctx = context;
    this.particles = [];
    this.mp = Math.min(300, Math.max(20, this.dc * this.W * this.H));
    this.dc = 0.000180845;
    this.rc = 0.003472;

    this._calculateCanvasSize();
    this._calculateSnowflakes();
    this._init();
  }

  _calculateSnowflakes() {
    this.mp = Math.min(100, Math.max(80, this.dc * this.W * this.H));
    for (let i = 0; i < this.mp; i++) {
      this.particles.push({
        x: Math.random() * this.W,
        y: Math.random() * this.H,
        r: Math.random() * Math.min(4, Math.max(0, this.rc * this.W)) + 1,
        a: Math.random() * Math.PI * 2,
        d: Math.random() * this.mp,
      });
    }
  }

  _calculateCanvasSize() {
    this.W = window.innerWidth;
    this.H = window.innerHeight;
    this.$canvas.width = this.W;
    this.$canvas.height = this.H;
  }

  _init() {
    if (this.W < 768 || !this.$canvas) {
      return false;
    }

    window.addEventListener("resize", () => {
      this._calculateCanvasSize();
      this._calculateSnowflakes();
    });

    this.update = () => {
      for (let i = 0; i < this.mp; i++) {
        const p = this.particles[i];
        p.a += 0.01;
        p.y += (Math.cos(p.a + p.d) + Math.random() + p.r / 2) * 0.5;
        p.x += Math.sin(p.a) * 2;

        if (p.x > this.W + 5 || p.x < -5 || p.y > this.H) {
          if (i % 3 > 0) {
            this.particles[i] = {
              x: Math.random() * this.W,
              y: -10,
              r: p.r,
              d: p.d,
              a: p.a,
            };
          } else {
            if (Math.sin(p.a) > 0) {
              this.particles[i] = {
                x: -5,
                y: Math.random() * this.H,
                r: p.r,
                d: p.d,
                a: p.a,
              };
            } else {
              this.particles[i] = {
                x: this.W + 5,
                y: Math.random() * this.H,
                r: p.r,
                d: p.d,
                a: p.a,
              };
            }
          }
        }
      }
    };

    this.draw = () => {
      
      this.ctx.clearRect(0, 0, this.W, this.H);
      this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      this.ctx.beginPath();
      for (let i = 0; i < this.mp; i++) {
        const p = this.particles[i];
        this.ctx.moveTo(p.x, p.y);
        this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      this.ctx.fill();
    };

    const draw = () => {
      this.update();
      this.draw();
      window.requestAnimationFrame(draw);
    };

    window.onload = () => {
      draw();
    };
  }
}

export default SnowEffect;
