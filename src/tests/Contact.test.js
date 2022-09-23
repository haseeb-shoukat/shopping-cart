import React from "react";
import { render } from "@testing-library/react";
import Contact from "../components/Contact";

describe("Contact component", () => {
  it("Renders successfully", () => {
    const contact = global.document.createElement("div");
    contact.id = "contact";
    global.document.body.appendChild(contact);
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });
});
