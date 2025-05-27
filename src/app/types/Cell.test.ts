import Cell from "./Cell";

describe("Cell", () => {
  it("should create a cell with empty value", () => {
    // Given
    const cell = new Cell(0, 0, false, "");

    // Then
    expect(cell.value).toBe("");
  });

  it("should create a cell with a value", () => {
    // Given
    const cell = new Cell(0, 0, false, "X");

    // Then
    expect(cell.value).toBe("X");
  });
});
