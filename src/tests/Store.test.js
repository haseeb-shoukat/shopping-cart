import React from "react";
import { getAllByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Store from "../components/Store";
import Items from "../components/Items";

describe("Store component", () => {
  const store = global.document.createElement("div");
  store.id = "products";
  global.document.body.appendChild(store);

  const updateProducts = jest.fn();

  it("Renders successfully", () => {
    const { container } = render(
      <Store products={Items} updateProducts={updateProducts} />
    );
    expect(container).toMatchSnapshot();
  });

  it("Calls updateTotal/product.increment when Add to Cart button is pressed", () => {
    const fakeItem = {
      key: 1,
      image: "",
      name: "",
      price: 60,
      totalPrice: 60,
      increment: jest.fn(),
    };
    render(<Store products={[fakeItem]} updateProducts={updateProducts} />);

    const button = screen.getByRole("button", { name: "Add To Cart" });
    userEvent.click(button);
    expect(updateProducts).toHaveBeenCalledTimes(1);
    expect(fakeItem.increment).toHaveBeenCalledTimes(1);
  });
});
