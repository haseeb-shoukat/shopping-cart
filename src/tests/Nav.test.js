import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "../components/Nav";
import userEvent from "@testing-library/user-event";

describe("Nav component", () => {
  const showCart = jest.fn();

  it("Renders successfully", () => {
    const { container } = render(<Nav showCart={showCart} totalQuantity={0} />);
    expect(container).toMatchSnapshot();
  });

  it("Runs showCart function when Cart icon is clicked", () => {
    render(<Nav showCart={showCart} totalQuantity={0} />);
    userEvent.click(screen.getByRole("button"));
    expect(showCart).toHaveBeenCalledTimes(1);
  });

  it("Does not show bubble when quantity is <= 0", () => {
    render(<Nav showCart={showCart} totalQuantity={0} />);
    expect(
      screen.queryByRole("button", {
        name: 0,
      })
    ).toBe(null);
  });

  it("Shows bubble whe quantity > 0", () => {
    render(<Nav showCart={showCart} totalQuantity={19910010} />);
    expect(
      screen.queryByRole("button", {
        name: 19910010,
      })
    ).not.toBe(null);
  });
});
