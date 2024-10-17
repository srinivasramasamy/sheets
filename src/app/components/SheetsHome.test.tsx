import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SheetsHome from "./SheetsHome";

describe("Sheets Home", () => {
  it("should render menu bar", () => {
    // Given
    const { container } = render(<SheetsHome />);

    // Then
    expect(container.textContent).toContain("MenuBar");
  });

  it("should render sheets navigator", () => {
    // Given
    const { container } = render(<SheetsHome />);

    // Then
    expect(container.textContent).toContain("SheetsNavigator");
  });
});
