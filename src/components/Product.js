class Product {
  constructor(key, name, price, img) {
    this.key = key;
    this.name = name;
    this.price = price;
    this.img = img;
    this.quantity = 0;
  }

  increment = () => {
    if (this.quantity === 99) return;
    this.quantity += 1;
  };

  decrement = () => {
    if (this.quantity === 0) return;
    this.quantity -= 1;
  };
}

export default Product;
