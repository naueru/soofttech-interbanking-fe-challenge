import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";

// Component
import Link from "./Link";

// Types
import type { TLinkProps } from "./Link";

// CSS module classes
import styles from "./link.module.css";

describe("Link component", () => {
  const defaultProps: TLinkProps = {
    to: "/test",
    children: "Test Link",
  };

  it("renders children correctly", () => {
    render(
      <BrowserRouter>
        <Link {...defaultProps} />
      </BrowserRouter>
    );

    const link = screen.getByText("Test Link");
    expect(link).toBeInTheDocument();
  });

  it("applies the CSS class from styles.container", () => {
    render(
      <BrowserRouter>
        <Link {...defaultProps} />
      </BrowserRouter>
    );
    const link = screen.getByText("Test Link");
    expect(link).toHaveClass(styles.container);
  });

  it("sets target='_blank' and rel='noopener noreferrer' by default", () => {
    render(
      <BrowserRouter>
        <Link {...defaultProps} />
      </BrowserRouter>
    );
    const link = screen.getByText("Test Link");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("sets target='_self' and rel='' when self prop is true", () => {
    render(
      <BrowserRouter>
        <Link self {...defaultProps} />
      </BrowserRouter>
    );
    const link = screen.getByText("Test Link");
    expect(link).toHaveAttribute("target", "_self");
    expect(link).toHaveAttribute("rel", "");
  });

  it("passes additional props to RouterLink", () => {
    render(
      <BrowserRouter>
        <Link {...defaultProps} id="custom-id" data-test="custom-data" />
      </BrowserRouter>
    );
    const link = screen.getByText("Test Link");
    expect(link).toHaveAttribute("id", "custom-id");
    expect(link).toHaveAttribute("data-test", "custom-data");
  });
});
