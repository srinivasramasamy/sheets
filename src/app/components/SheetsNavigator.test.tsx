import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SheetsNavigator from "./SheetsNavigator";

describe("Sheets Navigator", () => {
  it("should render the sheets navigator", () => {
    // Given
    const { container } = render(<SheetsNavigator />);

    // Then
    expect(container.textContent).toContain("SheetsNavigator");
  });
});
