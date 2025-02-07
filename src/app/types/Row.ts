import Cell from "./Cell";

export default class Row {
  cells: Cell[];

  constructor(cells: Cell[]) {
    this.cells = cells;
  }
}
