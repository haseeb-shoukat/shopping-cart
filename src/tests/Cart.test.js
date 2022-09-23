import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Cart from "../components/Cart";

const Product = class {
  constructor(key, name, price, img, quantity = 0) {
    this.key = key;
    this.name = name;
    this.price = price;
    this.img = img;
    this.quantity = quantity;
    this.totalPrice = 0;
  }

  increment = jest.fn();
  decrement = jest.fn();
};

describe("Cart component", () => {
  const hideCart = jest.fn();
  const updateProducts = jest.fn();

  it("Renders component", () => {
    const { container } = render(
      <Cart
        hideCart={hideCart}
        totalPrice={0}
        cartProducts={[]}
        updateProducts={updateProducts}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("Renders empty div when product with zero quantity passed in", () => {
    const fakeItem = new Product(
      1,
      "Matt Black Cap, Unbranded, Unisex",
      19.5,
      "cap"
    );

    const { container } = render(
      <Cart
        hideCart={hideCart}
        totalPrice={0}
        cartProducts={[fakeItem]}
        updateProducts={updateProducts}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it("Renders the item when product with non-zero quantity passed in", () => {
    const fakeItem = new Product(
      1,
      "Matt Black Cap, Unbranded, Unisex",
      19.5,
      "cap",
      1
    );

    render(
      <Cart
        hideCart={hideCart}
        totalPrice={0}
        cartProducts={[fakeItem]}
        updateProducts={updateProducts}
      />
    );

    expect(
      screen.getByText("Matt Black Cap, Unbranded, Unisex")
    ).toBeInTheDocument();
  });

  it("Runs appropriate function when incr/decr button is pressed", () => {
    const fakeItem = new Product(
      1,
      "Matt Black Cap, Unbranded, Unisex",
      19.5,
      "cap",
      1
    );

    render(
      <Cart
        hideCart={hideCart}
        totalPrice={0}
        cartProducts={[fakeItem]}
        updateProducts={updateProducts}
      />
    );

    const buttons = screen.getAllByRole("button");
    buttons.forEach((button) => {
      if (button.textContent === "Close" || button.textContent === "Checkout")
        return;
      userEvent.click(button);
    });
    expect(fakeItem.increment).toHaveBeenCalledTimes(1);
    expect(fakeItem.decrement).toHaveBeenCalledTimes(1);
    expect(updateProducts).toHaveBeenCalledTimes(2);
  });

  it("Runs hideCart function when Close button is clicked", () => {
    render(
      <Cart
        hideCart={hideCart}
        totalPrice={0}
        cartProducts={[]}
        updateProducts={updateProducts}
      />
    );

    const button = screen.getByRole("button", { name: "Close" });
    userEvent.click(button);
    expect(hideCart).toHaveBeenCalledTimes(1);
  });
});
