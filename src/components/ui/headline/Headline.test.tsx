import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// Component
import Headline from "./Headline";

// Css module classes
import styles from "./headline.module.css";

describe("Headline component", () => {
  it("renders an h3 element with the correct class and children", () => {
    render(<Headline>Test Headline</Headline>);

    const heading = screen.getByRole("heading", { level: 3 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(styles.container);
    expect(heading).toHaveTextContent("Test Headline");
  });

  it("passes additional props to the h3 element", () => {
    render(
      <Headline id="headline-id" aria-label="headline-label">
        Hello
      </Headline>
    );

    const heading = screen.getByRole("heading", { level: 3 });

    expect(heading).toHaveAttribute("id", "headline-id");
    expect(heading).toHaveAttribute("aria-label", "headline-label");
  });
});
