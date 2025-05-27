import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// Component
import Button from "./Button";

// CSS modules classnames
import styles from "./button.module.css";

describe("Button component", () => {
  it("renders with primary class by default", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass(styles.container);
    expect(button).toHaveClass(styles.primary);
    expect(button).not.toHaveClass(styles.secondary);
  });

  it("renders with secondary class when secondary prop is true", () => {
    render(<Button secondary>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass(styles.container);
    expect(button).toHaveClass(styles.secondary);
    expect(button).not.toHaveClass(styles.primary);
  });

  it("passes native button props correctly", () => {
    const onClick = vi.fn();
    render(
      <Button type="submit" disabled onClick={onClick}>
        Submit
      </Button>
    );
    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toBeDisabled();

    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("calls onClick handler when clicked and not disabled", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
