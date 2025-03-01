import Cell from "./Cell";

export default class Row {
  cells: Cell[];

  constructor(noOfCells: number) {
    this.cells = new Array(noOfCells).fill(null).map(() => new Cell(""));
  }
}
