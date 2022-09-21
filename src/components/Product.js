class Product {
  constructor(key, name, price, img) {
    this.key = key;
    this.name = name;
    this.price = price;
    this.img = img;
    this.quantity = 0;
    this.totalPrice = 0;
  }

  updateTotal() {
    this.totalPrice = this.quantity * this.price;
  }

  increment() {
    if (this.quantity === 99) return;
    this.quantity += 1;
    this.updateTotal();
  }

  decrement() {
    if (this.quantity === 0) return;
    this.quantity -= 1;
    this.updateTotal();
  }
}

export default Product;
