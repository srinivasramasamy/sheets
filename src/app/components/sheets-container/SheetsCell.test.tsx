import { render } from "@testing-library/react";
import SheetsCell from "./SheetsCell";

describe("Sheets Cell", () => {
  it("should render the sheets cell", () => {
    // Given
    const value: string = "cell1";
    const { container } = render(<SheetsCell value={value} />);

    // Then
    expect(container.textContent).toContain(value);
  });
});
