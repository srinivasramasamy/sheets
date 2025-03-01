import Cell from "./Cell";

describe("Cell", () => {
  it("should create a cell with empty value", () => {
    // Given
    const cell = new Cell("");

    // Then
    expect(cell.value).toBe("");
  });

  it("should create a cell with a value", () => {
    // Given
    const cell = new Cell("X");

    // Then
    expect(cell.value).toBe("X");
  });
});
