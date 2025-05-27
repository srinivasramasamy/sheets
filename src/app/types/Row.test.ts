import Row from "./Row";

describe("Row", () => {
  it("should create a row with number of cells", () => {
    // Given
    const noOfCells: number = 3;
    const row: Row = new Row(0, noOfCells);

    // Then
    expect(row.cells).toHaveLength(noOfCells);
  });
});
