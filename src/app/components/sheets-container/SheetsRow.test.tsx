import Cell from "@/app/types/Cell";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import SheetsRow from "./SheetsRow";
describe("SheetsRow", () => {
  it("should render the row with cells", () => {
    // Given
    const cell = new Cell(0, 0, false, "A1");
    const row = {
      cells: [cell],
    };

    // When
    const { container } = render(<SheetsRow row={row} />);

    // Then
    expect(container.textContent).toContain(cell.value);
  });

  it("should render the row with multiple cells", () => {
    // Given
    const cell1 = new Cell(0, 0, false, "A1");
    const cell2 = new Cell(0, 1, false, "B1");
    const row = {
      cells: [cell1, cell2],
    };

    // When
    const { container } = render(<SheetsRow row={row} />);

    // Then
    expect(container.textContent).toContain(cell1.value);
    expect(container.textContent).toContain(cell2.value);
  });

  it("should render the row with empty cells", () => {
    // Given
    const cell1 = new Cell(0, 0, false, "");
    const row = {
      cells: [cell1],
    };

    // When
    const { container } = render(<SheetsRow row={row} />);

    // Then
    expect(container.textContent).toContain(cell1.value);
  });
});
