class Ship {
  constructor(type, length) {
    this.type = type;
    this.length = length;
    this.hit = 0;
  }

  getLength = () => {
    return this.length;
  };
  gotHit = () => {
    this.hit++;
    return this.hit;
  };

  isSunk = () => {
    return this.hit === this.getLength();
  };
}

module.exports = Ship;
