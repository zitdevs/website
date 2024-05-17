import React from "react";
import Header from "./Header";

describe("<Header />", () => {
  it("renders the header component", () => {
    cy.mount(<Header />);

    cy.get('a[title="ZitDevs"]').should("be.visible");
    cy.get("nav").should("exist");
    cy.contains("button", "Contact Us").should("be.visible");
  });
});
