import Cell from "./Cell";

export default class Row {
  cells: Cell[];

  constructor(rowIndex: number, noOfCells: number) {
    this.cells = new Array(noOfCells)
      .fill(null)
      .map(
        (_, columnIndex: number) => new Cell(rowIndex, columnIndex, false, "")
      );
  }
}
