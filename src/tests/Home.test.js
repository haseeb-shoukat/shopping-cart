import React from "react";
import { render } from "@testing-library/react";
import Home from "../components/Home";

describe("Home component", () => {
  it("Renders successfully", () => {
    const home = global.document.createElement("div");
    home.id = "home";
    global.document.body.appendChild(home);
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
