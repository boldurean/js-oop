export default class Cart {
  constructor() {
    this.cart = [];
  }

  addItem(item, count) {
    this.cart.push({ item, count });
  }

  getItems() {
    return this.cart;
  }

  getCost() {
    return this.cart.reduce((acc, obj) => {
      const { price } = obj.item;
      const { count } = obj;
      return acc + (price * count);
    }, 0);
  }

  getCount() {
    return this.cart.reduce((acc, item) => item.count + acc, 0);
  }
}

const cart = new Cart();
cart.addItem({ name: 'car', price: 3 }, 5);
cart.addItem({ name: 'house', price: 10 }, 2);
cart.getCost();
