import Hero, { HeroProps } from "./Hero";

describe("<Hero />", () => {
  const mockTHero: HeroProps["tHero"] = {
    title: "Welcome to ZitDevs",
  };

  it("renders the hero component", () => {
    cy.mount(<Hero tHero={mockTHero} />);
    cy.contains("h2", mockTHero.title).should("be.visible");
  });

  it("displays the correct title", () => {
    cy.mount(<Hero tHero={mockTHero} />);
    cy.get("h2").should("have.text", mockTHero.title);
  });
});
