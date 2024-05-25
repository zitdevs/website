import { Button, ButtonProps } from "./Button";

type ButtonTestProps = ButtonProps & { children: string };

describe("<Button />", () => {
  const defaultButtonProps: ButtonTestProps = {
    children: "Default Button",
  };

  const destructiveButtonProps: ButtonTestProps = {
    children: "Destructive Button",
    variant: "destructive",
  };

  const smallButtonProps: ButtonTestProps = {
    children: "Small Button",
    size: "sm",
  };

  const largeButtonProps: ButtonTestProps = {
    children: "Large Button",
    size: "lg",
  };

  it("renders the default button", () => {
    cy.mount(<Button {...defaultButtonProps} />);
    cy.contains("button", defaultButtonProps.children).should("be.visible");
  });

  it("renders the destructive button", () => {
    cy.mount(<Button {...destructiveButtonProps} />);
    cy.contains("button", destructiveButtonProps.children).should("be.visible");
    cy.get("button").should("have.class", "bg-destructive");
    cy.get("button").should("have.class", "text-destructive-foreground");
  });

  it("renders the small button", () => {
    cy.mount(<Button {...smallButtonProps} />);
    cy.contains("button", smallButtonProps.children).should("be.visible");
    cy.get("button").should("have.class", "h-9");
    cy.get("button").should("have.class", "px-3");
  });

  it("renders the large button", () => {
    cy.mount(<Button {...largeButtonProps} />);
    cy.contains("button", largeButtonProps.children).should("be.visible");
    cy.get("button").should("have.class", "h-11");
    cy.get("button").should("have.class", "px-8");
  });
});
