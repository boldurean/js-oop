export default class Random {
  constructor(seed) {
    this.seed = seed;
    this.initial = seed;
  }

  getNext() {
    const a = 16807;
    const m = 2147483647;
    this.seed = (this.seed * a) % m;
    return this.seed;
  }

  reset() {
    this.seed = this.initial;
  }
}
