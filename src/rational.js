const make = (numer, denom) => ({
  numer,
  denom,
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  toString() {
    return `${this.getNumer()}/${this.getDenom()}`;
  },
  add(rat) {
    const a = this.getNumer();
    const b = this.getDenom();
    const c = rat.getNumer();
    const d = rat.getDenom();
    return make((a * d + b * c), (b * d));
  },
});

export default make;
