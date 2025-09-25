// trainer.js
export class Trainer {
  constructor(name, level, energy) {
    this.name = name;
    this.level = level;
    this.energy = energy;
  }

  train() {
    this.level += 1;
    this.energy -= 10;
  }

  rest() {
    this.energy = 100;
  }

  describe() {
    return `${this.name} is level ${this.level} with ${this.energy} energy.`;
  }
}