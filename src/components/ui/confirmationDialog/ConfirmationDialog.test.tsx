import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ConfirmationDialog, {
  type TConfirmationDialogProps,
} from "./ConfirmationDialog";

import styles from "./confirmationDialog.module.css";

describe("ConfirmationDialog", () => {
  let props: TConfirmationDialogProps;

  beforeEach(() => {
    const portal = document.createElement("div");
    portal.setAttribute("id", "modal-portal");
    document.body.appendChild(portal);
    props = {
      isOpen: true,
      title: "Confirm Action",
      message: "Are you sure you want to continue?",
      onConfirm: vi.fn(),
      onCancel: vi.fn(),
    };
  });

  it("renders nothing when isOpen is false", () => {
    render(<ConfirmationDialog {...props} isOpen={false} />);
    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });

  it("renders title and message correctly", () => {
    render(<ConfirmationDialog {...props} />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      props.title!
    );
    expect(screen.getByText(props.message!)).toHaveClass(styles.description);
  });

  it("calls onConfirm when Ok button is clicked", () => {
    render(<ConfirmationDialog {...props} />);
    const okButton = screen.getByRole("button", { name: "Ok" });
    fireEvent.click(okButton);
    expect(props.onConfirm).toHaveBeenCalled();
  });

  it("calls onCancel when Cancel button is clicked", () => {
    render(<ConfirmationDialog {...props} />);
    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    fireEvent.click(cancelButton);
    expect(props.onCancel).toHaveBeenCalled();
  });

  it("calls onCancel when clicking on the modal background", () => {
    render(<ConfirmationDialog {...props} />);
    const modal = screen.getByTestId("modal");
    fireEvent.click(modal);
    expect(props.onCancel).toHaveBeenCalled();
  });
});
