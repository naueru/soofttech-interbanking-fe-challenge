import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// Component
import Branding, { type TBrandingProps } from "./Branding";

// Constants
import { COLORS } from "../../../constants/colors";

// CSS module classnames
import styles from "./branding.module.css";

describe("Branding component", () => {
  const defaultProps: TBrandingProps = {
    alt: false,
    inverted: false,
    small: false,
    label: false,
  };

  it("renders container with correct class", () => {
    render(<Branding {...defaultProps} />);
    const container = screen.getByText(
      (_, element) => element?.tagName === "SPAN"
    );
    expect(container).toHaveClass(styles.container);
  });

  it("renders Logo with default sizeFactor and color", () => {
    render(<Branding {...defaultProps} />);
    const logo = screen.getByTestId("logo");
    expect(logo).toHaveAttribute("data-size-factor", "1");
    expect(logo).toHaveAttribute("data-color", COLORS.LOGO);
  });

  it("renders Logo with sizeFactor 0.6 when small is true", () => {
    render(<Branding {...defaultProps} small />);
    const logo = screen.getByTestId("logo");
    expect(logo).toHaveAttribute("data-size-factor", "0.6");
  });

  it("renders Logo with alt color when alt is true", () => {
    render(<Branding {...defaultProps} alt />);
    const logo = screen.getByTestId("logo");
    expect(logo).toHaveAttribute("data-color", COLORS.LOGO_ALT);
  });

  it("does not render label paragraph if label is false", () => {
    render(<Branding {...defaultProps} />);
    expect(screen.queryByText("Tech")).not.toBeInTheDocument();
  });

  it("renders label paragraph with correct classes when label is true", () => {
    render(<Branding {...defaultProps} label />);
    const label = screen.getByText("Tech");
    expect(label).toHaveClass(styles.legend);
    expect(label).not.toHaveClass(styles.inverted);
  });

  it("adds inverted class to label paragraph when inverted is true", () => {
    render(<Branding {...defaultProps} label inverted />);
    const label = screen.getByText("Tech");
    expect(label).toHaveClass(styles.legend);
    expect(label).toHaveClass(styles.inverted);
  });
});
