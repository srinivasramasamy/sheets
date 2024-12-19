import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SheetsNavigator from "./SheetsNavigator";

describe("Sheets Navigator", () => {
  it("should render the sheets navigator", () => {
    // Given
    const { container } = render(<SheetsNavigator />);

    // Then
    expect(container.querySelector("#sheets-navigator")).toBeTruthy();
  });

  it("should have add sheets button", () => {
    // Given
    const { container } = render(<SheetsNavigator />);

    // Then
    expect(container.querySelector("#add-sheets")).toBeTruthy();
  });

  it("should have default tab", () => {
    // Given
    const defaultTabName: string = "Sheet1";
    const { container } = render(<SheetsNavigator />);

    // Then
    expect(container.textContent).toContain(defaultTabName);
  });
});
