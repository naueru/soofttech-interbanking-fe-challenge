import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

// Component
import Modal from "./Modal";

// Types
import type { TModalProps } from "./Modal";

// CSS module classnames
import styles from "./modal.module.css";

describe("Modal component", () => {
  const defaultProps: TModalProps = {
    isOpen: true,
    children: <div>Modal Content</div>,
  };

  beforeEach(() => {
    defaultProps.handleClose = vi.fn();
    const portal = document.createElement("div");
    portal.setAttribute("id", "modal-portal");
    document.body.appendChild(portal);
  });

  afterEach(() => {
    const portal = document.getElementById("modal-portal");
    if (portal) {
      document.body.removeChild(portal);
    }
  });

  it("renders nothing when isOpen is false", () => {
    render(<Modal isOpen={false} />);
    const modal = screen.queryByText("Modal Content");
    expect(modal).not.toBeInTheDocument();
  });

  it("renders modal content inside the portal when isOpen is true", () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    const container =
      screen.getByText("Modal Content").parentElement?.parentElement;
    expect(container).toHaveClass(styles.container);

    const content = screen.getByText("Modal Content").parentElement;
    expect(content).toHaveClass(styles.content);
  });

  it("calls handleClose when clicking on the background container", () => {
    render(<Modal {...defaultProps} />);
    const container =
      screen.getByText("Modal Content").parentElement?.parentElement;
    if (!container) throw new Error("Container not found");

    fireEvent.click(container);
    expect(defaultProps.handleClose).toHaveBeenCalled();
  });

  it("does not call handleClose when clicking inside the modal content", () => {
    render(<Modal {...defaultProps} />);
    const content = screen.getByText("Modal Content").parentElement;

    if (!content) throw new Error("Content not found");

    fireEvent.click(content);

    expect(defaultProps.handleClose).not.toHaveBeenCalled();
  });

  it("calls handleClose when clicking the close button", () => {
    render(<Modal {...defaultProps} />);
    const closeButton = screen.getByRole("button", { name: "X" });
    fireEvent.click(closeButton);
    expect(defaultProps.handleClose).toHaveBeenCalled();
  });

  it("renders children correctly", () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });
});
