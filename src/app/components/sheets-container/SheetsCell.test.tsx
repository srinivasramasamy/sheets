import Cell from "@/app/types/Cell";
import { render } from "@testing-library/react";
import SheetsCell from "./SheetsCell";

describe("Sheets Cell", () => {
  it("should render the sheets cell", () => {
    // Given
    const value: string = "cell1";
    const cell: Cell = new Cell(0, 0, false, value);

    // When
    const { container } = render(<SheetsCell cell={cell} />);

    // Then
    expect(container.textContent).toContain(value);
  });
});
