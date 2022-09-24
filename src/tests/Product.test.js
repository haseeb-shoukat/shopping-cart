import Product from "../components/Product";

describe("Product class used to create Store items", () => {
  it("Updates Total Price correctly", () => {
    const fakeItem = new Product(0, "Fake Item", 60, "image");
    fakeItem.increment();
    fakeItem.increment();
    fakeItem.updateTotal();
    expect(fakeItem.totalPrice).toBe(120);
  });

  it("Incr/Decr do not cross boundary values", () => {
    const fakeItem = new Product(0, "Fake Item", 60, "image");
    fakeItem.decrement();
    expect(fakeItem.quantity).toBe(0);
    fakeItem.quantity = 99;
    fakeItem.increment();
    expect(fakeItem.quantity).toBe(99);
  });
});
