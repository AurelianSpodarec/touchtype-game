class PianoLine {
  constructor(key, x, y, width, height) {
    this.key = key;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hit = false;
    this.sparkles = false;
  }
}

export default PianoLine;
