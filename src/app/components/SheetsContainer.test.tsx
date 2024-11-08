import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SheetsContainer from "./SheetsContainer";

describe("Sheets Container", () => {
  it("should render the sheets container", () => {
    // Given
    const { container } = render(<SheetsContainer />);

    // Then
    expect(container.textContent).toContain("SheetsContainer");
  });
});
