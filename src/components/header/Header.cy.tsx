import React from "react";
import Header from "./Header";
import { Dictionary } from "@/get-dictionary";

describe("<Header />", () => {
  it("renders the header component", () => {
    const tHeader: Dictionary["default"]["header"] = {
      title: "Title",
      menu: {
        about: "About",
        services: "Services",
        home: "Home",
        how_it_works: "How it works",
      },
      cta: {
        contact: "Contact",
      },
    };

    cy.mount(<Header tHeader={tHeader} />);
    cy.get(`a[title="${tHeader.title}"]`).should("be.visible");
    cy.contains("button", tHeader.cta.contact).should("be.visible");
  });
});
